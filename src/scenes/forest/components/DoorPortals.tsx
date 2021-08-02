import DoorPortal from '../../../components/DoorPortal'

export default function DoorPortals(): JSX.Element {
  return (
    <>
      <DoorPortal
        position={[-2.686, 1.17, 0.1]}
        scale={[0, 0, 0]}
        size={[0.42, 2.134, 1]}
        rotation={[0, 0, 0]}
        color={'red'}
        onCollide={() => {
          // eslint-disable-next-line no-undef
          window.location.pathname = 'gorge'
        }}
      />
      <DoorPortal
        position={[8.804, 5.582, -13.659]}
        scale={[0, 0, 0]}
        size={[1.719, 3.022, 0.971]}
        rotation={[0, 0, 0]}
        color={'red'}
        onCollide={() => {
          // eslint-disable-next-line no-undef
          window.location.pathname = 'gorge'
        }}
      />
    </>
  )
}
