import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'

type playerProps = {
  position?: number[]
}

export const Player = (props: playerProps) => {
  const [ref, api] = useSphere(() => ({
    args: 1,
    mass: 1,
    type: 'Dynamic',
    sleepSpeedLimit: 3,
    // sleepTimeLimit: 4,
    sleepTimeLimit: 0,
    allowSleep: true,
    position: props.position || [10, 0, 0] // Default player position
  }))

  const SPEED = 3
  const keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump'
  }
  const moveFieldByKey = key => keys[key]
  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()

  const usePlayerControls = () => {
    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false
    })
    useEffect(() => {
      // Init the event listener to the document at the first page render
      const handleKeyDown = e => {
        // api.allowSleep.set(false)
        setMovement(m => ({ ...m, [moveFieldByKey(e.code)]: true }))
        api.applyForce([0.5, 0.5, 0.5], [0, 0, 0])
      }

      const handleKeyUp = e => {
        // api.allowSleep.set(true)
        setMovement(m => ({ ...m, [moveFieldByKey(e.code)]: false }))
      }

      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      return () => {
        // Clean/Remove the event listener after the user exits the page
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('keyup', handleKeyUp)
      }
    }, [])
    return movement
  }

  const { forward, backward, left, right } = usePlayerControls()
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])

  useEffect(() => void api.velocity.subscribe(v => (velocity.current = v)), [])

  useFrame(() => {
    camera.position.copy(ref.current.position)
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
  })
  return <mesh ref={ref} />
}
