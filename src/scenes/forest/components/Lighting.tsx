export default function Lighting(): JSX.Element {
  return (
    <>
      <pointLight
        intensity={0.25}
        decay={1}
        color={'#ffffff'}
        distance={10}
        position={[2.476, 3, -1.381]}
        castShadow={true}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-far={1}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        intensity={0.35}
        decay={1}
        color={'#a7afcd'}
        distance={10}
        position={[16.431, 2.568, -8.514]}
      />
      <pointLight
        intensity={0.75}
        decay={1}
        color={'#5470af'}
        distance={15}
        position={[29.272, 1.844, -14.222]}
      />
      <pointLight
        intensity={0.75}
        decay={1}
        color={'#5470af'}
        distance={10}
        position={[42.268, 2.608, -13.26]}
      />
      <pointLight
        intensity={0.75}
        decay={2}
        color={'#d0a35e'}
        distance={7}
        position={[14.069, 4.462, -34.658]}
      />
      <pointLight
        intensity={0.5}
        decay={2}
        color={'#d9e6ec'}
        distance={10}
        position={[2.379, 4.714, -37.578]}
      />
      <pointLight
        intensity={0.75}
        decay={1}
        color={'#d0a35e'}
        distance={12}
        position={[10.069, 6.654, -22.59]}
        castShadow={true}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-far={1}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        intensity={0.75}
        decay={2}
        color={'#5470AF'}
        distance={10}
        position={[20.612, 3.731, -29.494]}
      />
      <pointLight
        intensity={0.75}
        decay={2}
        color={'#5470AF'}
        distance={8}
        position={[40.6, 3, -20]}
      />
    </>
  )
}
