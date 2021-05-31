import { ComponentType, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { ROOM } from './types'
import BackHomeButton from '../../components/atoms/BackHomeButton'
import { Stats } from '@react-three/drei'

let Room: ComponentType

export default function DynamicSceneLoading() {
  const [selectedRoom, setSelectedRoom] = useState(ROOM.A)

  if (selectedRoom == ROOM.A) {
    Room = dynamic(() => import('./room1'), {
      ssr: false
    })
  } else if (selectedRoom == ROOM.B) {
    Room = dynamic(() => import('./room2'), {
      ssr: false
    })
  }

  return (
    // TODO Create a start button to lock the cursor to the center of the scene
    // TODO Create a state to listen if the pointer lock is active or not
    // Otherwise show or hide the start button
    <div className='h-screen'>
      <h1 className='absolute top-0 right-0 z-10 pr-2 text-right'>
        <b>This is {selectedRoom == ROOM.A ? 'room 1' : 'room 2'}</b>
        <br /> Click on the cube to go to the other room
      </h1>
      <BackHomeButton />
      <div className='absolute z-10 w-6 h-1 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 select-none inset-1/2' />
      <div className='absolute z-10 w-1 h-6 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 select-none inset-1/2' />
      <Canvas camera={{ position: [0, 1, 5] }} className='bg-black'>
        <Room />
      </Canvas>
      <Stats />
    </div>
  )
}
