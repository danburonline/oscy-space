import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { useMemo } from 'react'
import niceColors from 'nice-color-palettes'

export default function InstancedSpheres({ number = 100 }) {
  const map = useLoader(
    THREE.TextureLoader,
    '/imgs/textures/normals/carbon-normal.jpeg'
  )
  const [ref] = useSphere(index => ({
    mass: 1,
    position: [Math.random() - 0.5, Math.random() - 0.5, index * 2],
    args: 1
  }))
  const colors = useMemo(() => {
    const array = new Float32Array(number * 3)
    const color = new THREE.Color()
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[17][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3)
    return array
  }, [number])
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, number]}>
      <sphereBufferGeometry attach='geometry' args={[1, 16, 16]}>
        <instancedBufferAttribute
          attachObject={['attributes', 'color']}
          args={[colors, 3]}
        />
      </sphereBufferGeometry>
      <meshPhongMaterial
        attach='material'
        // @ts-ignore
        vertexColors={THREE.VertexColors}
        normalMap={map}
        // @ts-ignore
        normalScale={[1, 1]}
        normalMap-wrapS={THREE.RepeatWrapping}
        normalMap-wrapT={THREE.RepeatWrapping}
        normalMap-repeat={[10, 10]}
      />
    </instancedMesh>
  )
}
