import { BufferGeometry } from 'three'
import { Geometry } from 'three-stdlib'

export default function toConvexProps(
  bufferGeometry: BufferGeometry
): number[][][] {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry)
  geo.mergeVertices()

  return [
    geo.vertices.map(v => [v.x, v.y, v.z]),
    geo.faces.map(f => [f.a, f.b, f.c]),
    []
  ]
}
