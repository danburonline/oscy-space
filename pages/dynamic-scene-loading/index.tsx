import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { ROOM } from './types'
import BackHomeButton from '../../components/atoms/BackHomeButton'
import { Stats } from '@react-three/drei'
import React from 'react'

function LoadDynamicRoom({
  playerInitPosition,
  roomSelection,
  setSelectedRoom
}) {
  const Room = React.useMemo(() => {
    if (roomSelection == ROOM.A) {
      return dynamic(() => import('./room1'), { ssr: false })
    } else if (roomSelection == ROOM.B) {
      return dynamic(() => import('./room2'), { ssr: false })
    }
  }, [roomSelection])
  return (
    <Room
      playerInitPosition={playerInitPosition}
      setSelectedRoom={setSelectedRoom}
    />
  )
}

export default function DynamicSceneLoading() {
  const [selectedRoom, setSelectedRoom] = useState(ROOM.A) // Default room is ROOM.A

  return (
    // TODO Create a start button to lock the cursor to the center of the scene
    // TODO Create a state to listen if the pointer lock is active or not
    <div className='h-screen'>
      <h1 className='absolute top-0 right-0 z-10 pr-2 text-right'>
        <b>This is {selectedRoom == ROOM.A ? 'room 1' : 'room 2'}</b>
        <br /> Click on the cube to go to the other room
      </h1>
      <BackHomeButton />
      <div className='absolute z-10 w-6 h-1 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 select-none inset-1/2' />
      <div className='absolute z-10 w-1 h-6 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 select-none inset-1/2' />
      <Canvas camera={{ position: [0, 1, 5] }} className='bg-black'>
        <LoadDynamicRoom
          playerInitPosition={[10, 10, 0]}
          roomSelection={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
      </Canvas>
      <Stats />
    </div>
  )
}
