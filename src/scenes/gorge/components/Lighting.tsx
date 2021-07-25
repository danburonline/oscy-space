export default function Lighting(): JSX.Element {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight
        position={[-1.342, 0.914, -5.404]}
        intensity={1}
        color={'#FBB879'}
        distance={3}
        decay={2}
      />
      <pointLight
        position={[-2.96, 0.8, -10.822]}
        intensity={1}
        color={'#FBB879'}
        distance={3}
        decay={2}
      />
      <pointLight
        position={[-1.97, 1.811, -19.971]}
        intensity={1}
        color={'#FBB879'}
        distance={3}
        decay={2}
      />
      <pointLight
        position={[0.417, 0.849, -29.269]}
        intensity={1}
        color={'#FBB879'}
        distance={3}
        decay={2}
      />
      <pointLight
        position={[-8.924, 1.9, -36.325]}
        intensity={1}
        color={'#FBB879'}
        distance={3}
        decay={2}
      />
      <pointLight
        position={[-9.283, 2.644, -38.274]}
        intensity={1}
        color={'#FBB879'}
        distance={3}
        decay={2}
      />
      <pointLight
        position={[1.66, 1.012, -49.098]}
        intensity={1}
        color={'#FBB879'}
        distance={3}
        decay={2}
      />
    </>
  )
}
