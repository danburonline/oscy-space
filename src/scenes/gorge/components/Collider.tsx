import CollisionBox from '../../../components/CollisionBox'
import gorgeColliderBoxesArray from '../utils/gorgeColliderBoxesArray'

export default function Collider(): JSX.Element {
  const gorgeColliderBoxes = gorgeColliderBoxesArray.map(gorgeColliderBox => (
    <CollisionBox
      key={gorgeColliderBox.id}
      size={gorgeColliderBox.size}
      position={gorgeColliderBox.position}
      scale={gorgeColliderBox.scale}
      rotation={gorgeColliderBox.rotation}
      color={gorgeColliderBox.color}
    ></CollisionBox>
  ))

  return <>{gorgeColliderBoxes}</>
}
