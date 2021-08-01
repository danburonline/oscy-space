import type { CollisionBoxProps } from '../../../types/types'
import { MathUtils } from 'three'

interface forestColliderBoxesArrayInterface extends CollisionBoxProps {
  id: number
}

const forestColliderBoxesArray: forestColliderBoxesArrayInterface[] = [
  {
    id: 1,
    size: [2.992, 3, 0.1],
    position: [0.164, 1.37, 0.871],
    scale: [0, 0, 0],
    rotation: [0, 0, 0],
    color: '#fff'
  },
  {
    id: 2,
    size: [0.1, 3, 8.959],
    position: [1.295, 1.37, -3.489],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    color: '#fff'
  }
]

export default forestColliderBoxesArray
