import { usePlane } from '@react-three/cannon'

export default function Plane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
      <meshPhongMaterial attach='material' color={color} />
    </mesh>
  )
}
