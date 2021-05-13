import { useState } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'

export default function Box() {
  const [hover, setHover] = useState(false)

  const { posZ, color, hoverColor, scale } = useControls({
    posZ: {
      value: 0,
      min: 0,
      max: 10,
      step: 1
    },
    color: '#0f0',
    hoverColor: '#f00',
    scale: {
      value: 1,
      min: 1,
      max: 10,
      step: 0.25
    }
  })

  return (
    <mesh
      position={[0, 0, posZ]}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <primitive object={new THREE.AxesHelper(1.25)} />
      <boxBufferGeometry attach='geometry'></boxBufferGeometry>
      <meshLambertMaterial
        attach='material'
        color={hover ? hoverColor : color}></meshLambertMaterial>
    </mesh>
  )
}
