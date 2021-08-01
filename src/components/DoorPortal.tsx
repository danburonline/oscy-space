import { Box } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import type { DoorPortalProps } from '../types/types'

export default function DoorPortal(props: DoorPortalProps): JSX.Element {
  const [ref] = useBox(() => ({
    position: props.position,
    rotation: props.rotation,
    isTrigger: true,
    args: props.size,
    onCollide: props.onCollide
  }))

  return (
    <Box
      ref={ref}
      args={props.size}
      position={props.position}
      scale={props.scale}
    >
      <meshBasicMaterial color={props.color} wireframe={true} visible={false} />
    </Box>
  )
}
