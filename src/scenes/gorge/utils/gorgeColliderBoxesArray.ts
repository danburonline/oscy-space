import type { CollisionBoxProps } from '../../../types/types'

interface gorgeColliderBoxesArrayProps extends CollisionBoxProps {
  id: number
}

const gorgeColliderBoxesArray: gorgeColliderBoxesArrayProps[] = [
  {
    id: 1,
    size: [1, 1, 1],
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    color: '#fff'
  },
  {
    id: 1,
    size: [2, 2, 2],
    position: [2, 1, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    color: 'red'
  }
]

export default gorgeColliderBoxesArray
