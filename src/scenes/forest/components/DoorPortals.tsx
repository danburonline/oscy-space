import DoorPortal from '../../../components/DoorPortal'
import { MathUtils } from 'three'

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
        position={[8.851, 5.124, -12.527]}
        scale={[0, 0, 0]}
        size={[0.482, 2.134, 1]}
        rotation={[0, MathUtils.degToRad(90), 0]}
        color={'red'}
        onCollide={() => {
          // eslint-disable-next-line no-undef
          window.location.pathname = 'gorge'
        }}
      />
    </>
  )
}
