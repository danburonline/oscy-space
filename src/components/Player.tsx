import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'
import type { PlayerProps } from '../types/types'

export const Player = (props: PlayerProps): JSX.Element => {
  const [ref, api] = useSphere(() => ({
    args: 0.5,
    mass: 1,
    type: 'Dynamic',
    sleepSpeedLimit: 2.5,
    sleepTimeLimit: 0,
    allowSleep: true,
    position: props.position || [0, 1, 0] // Default player position
  }))

  const moveFieldByKey = key => keys[key]
  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()
  const SPEED = 2.5
  const keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump'
  }

  const usePlayerControls = () => {
    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false
    })

    useEffect(() => {
      const handleKeyDown = event => {
        setMovement(m => ({ ...m, [moveFieldByKey(event.code)]: true }))
        api.applyForce([0.5, 0.5, 0.5], [0, 0, 0])
      }

      const handleKeyUp = e => {
        setMovement(m => ({ ...m, [moveFieldByKey(e.code)]: false }))
      }

      // eslint-disable-next-line no-undef
      document.addEventListener('keydown', handleKeyDown)
      // eslint-disable-next-line no-undef
      document.addEventListener('keyup', handleKeyUp)
      return () => {
        // eslint-disable-next-line no-undef
        document.removeEventListener('keydown', handleKeyDown)
        // eslint-disable-next-line no-undef
        document.removeEventListener('keyup', handleKeyUp)
      }
    }, [])

    return movement
  }

  const { forward, backward, left, right } = usePlayerControls()
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])

  useEffect(
    () => void api.velocity.subscribe(v => (velocity.current = v)),
    [api.velocity]
  )

  useFrame(() => {
    camera.position.copy(ref.current.position).y += 1 // Heighten the player view a little to make it feel human
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
