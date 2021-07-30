import { Box } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import type { CollisionBoxProps } from '../types/types'

export default function CollisionBox(props: CollisionBoxProps): JSX.Element {
  const [ref] = useBox(() => ({
    position: props.position,
    rotation: props.rotation,
    args: props.size
  }))

  return (
    <Box
      ref={ref}
      args={props.size}
      position={props.position}
      scale={props.scale}
    >
      <meshBasicMaterial color={props.color} wireframe={true} />
    </Box>
  )
}
