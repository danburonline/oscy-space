import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Water } from 'three-stdlib'

extend({ Water })

export default function TaminaWater(): JSX.Element {
  const ref = useRef()
  const gl = useThree(state => state.gl)
  const waterNormals = useLoader(
    THREE.TextureLoader,
    '/textures/water-normal.jpeg'
  )
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(85, 30), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xfbb879,
      waterColor: 0x001e1b,
      distortionScale: 3.7,
      fog: false,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      format: gl.encoding
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [waterNormals, gl.encoding]
  )
  useFrame(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (_, delta) => (ref.current.material.uniforms.time.value += delta)
  )
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      rotation-z={-Math.PI / 2}
      position={[-12, -4, -25]}
    />
  )
}
