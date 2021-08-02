import CollisionBox from '../../../components/CollisionBox'
import forestColliderBoxesArray from '../utils/forestColliderBoxesArray'

export default function Collider(): JSX.Element {
  const forestColliderBoxes = forestColliderBoxesArray.map(
    forestColliderBox => (
      <CollisionBox
        key={forestColliderBox.id}
        size={forestColliderBox.size}
        position={forestColliderBox.position}
        scale={forestColliderBox.scale}
        rotation={forestColliderBox.rotation}
        color={forestColliderBox.color}
      ></CollisionBox>
    )
  )

  return <>{forestColliderBoxes}</>
}
