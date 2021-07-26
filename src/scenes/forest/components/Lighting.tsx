export default function Lighting(): JSX.Element {
  return (
    <pointLight
      intensity={0.5}
      color={'white'}
      distance={20}
      position={[0, 5, 0]}
    />
  )
}
