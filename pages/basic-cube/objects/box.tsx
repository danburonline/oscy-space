import * as THREE from 'three'
import { useControls } from 'leva'

export default function Box() {
  const { posZ, cubeColor } = useControls({
    posZ: {
      value: 0,
      min: 0,
      max: 10,
      step: 1
    },
    cubeColor: '#f00'
  })

  return (
    <mesh position={[0, 0, posZ]}>
      <primitive object={new THREE.AxesHelper(2)} />
      <boxBufferGeometry attach='geometry'></boxBufferGeometry>
      <meshLambertMaterial
        attach='material'
        color={cubeColor}></meshLambertMaterial>
    </mesh>
  )
}
