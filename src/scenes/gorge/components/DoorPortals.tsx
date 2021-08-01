import DoorPortal from '../../../components/DoorPortal'

export default function DoorPortals(): JSX.Element {
  return (
    <>
      <DoorPortal
        position={[0.188, 1.29, 0.737]}
        scale={[0, 0, 0]}
        size={[1.952, 2.379, 0.119]}
        rotation={[0, 0, 0]}
        color={'red'}
        onCollide={() => {
          // eslint-disable-next-line no-undef
          window.location.pathname = 'forest'
        }}
      />
      <DoorPortal
        position={[-3.379, 1.37, -61.236]}
        scale={[0, 0, 0]}
        size={[1.297, 2.238, 0.1]}
        rotation={[0, 0, 0]}
        color={'red'}
        onCollide={() => {
          // eslint-disable-next-line no-undef
          window.location.pathname = 'forest'
        }}
      />
    </>
  )
}
