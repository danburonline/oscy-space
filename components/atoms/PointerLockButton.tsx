import React from 'react'
import { useState } from "react"

export default function PointerLockButton() {
  const [pointerLocked, setPointerLocked] = useState(false)
  const visibilityState = pointerLocked ? 'hidden' : 'visible'

  React.useEffect(() => {
    document.addEventListener('pointerlockchange', (event) => {
      setPointerLocked(prevState => !prevState)
    })
  }, [])

  return (
      <>
      <div
        style={{visibility: visibilityState}}
        className='absolute inline-block z-30 inset-1/2 transform -translate-x-1/2 top-1/3 w-auto border-none w-max'
      >
        Click on the red dot to activate pointerlock controls
      </div>
      <button
        id={'pointerLockButton'}
        className={'absolute h-5 w-5 bg-red-800 z-30 select-none	cursor-crosshair transform -translate-x-1/2 -translate-y-1/2 text-white rounded-full inset-1/2'}
        style={{visibility: visibilityState}}
      >
      </button>


      </>
  )
}
