import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { ROOM } from '../../components/types'
import BackHomeButton from '../../components/atoms/BackHomeButton'
import { Stats, PointerLockControls } from '@react-three/drei'
import React from 'react'
import startFullscreen from '../../components/utils/startFullScreen'

function LoadDynamicRoom({
  playerInitPosition,
  roomSelection,
  setSelectedRoom
}) {
  const Room = React.useMemo(() => {
    if (roomSelection == ROOM.A) {
      return dynamic(() => import('../../components/objects/rooms/Room1'), {
        ssr: false
      })
    } else if (roomSelection == ROOM.B) {
      return dynamic(() => import('../../components/objects/rooms/Room2'), {
        ssr: false
      })
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
  const [pointerLocked, setPointerLocked] = useState(false)

  return (
    <>
      {!pointerLocked ? (
        <>
          <button
            onClick={() => {
              setPointerLocked(prevState => !prevState)
              startFullscreen()
            }}
            className={
              'absolute p-3 flex-1 h-16 w-32 bg-blue-800 z-30 select-none	cursor-crosshair transform -translate-x-1/2 -translate-y-1/2 text-white border-none inset-1/2'
            }
          >
            Enter scene
          </button>
          <div
            className={'absolute z-20 bg-black w-screen h-screen opacity-75'}
          />
        </>
      ) : null}
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
          <PointerLockControls />
        </Canvas>
        <Stats />
      </div>
    </>
  )
}
