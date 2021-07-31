/* eslint-disable no-undef */
import React from 'react'
import { useState } from 'react'

export default function PointerLockButton(): JSX.Element {
  const [pointerLocked, setPointerLocked] = useState(false)
  const visibilityState = pointerLocked ? 'hidden' : 'visible'

  React.useEffect(() => {
    document.addEventListener('pointerlockchange', () => {
      setPointerLocked(prevState => !prevState)
    })
  }, [])

  return (
    <>
      <div
        style={{ visibility: visibilityState }}
        className='absolute z-30 inline-block text-white transform -translate-x-1/2 border-none w-max inset-1/2 top-1/3'
      >
        Click on the white dot to activate pointerlock controls
      </div>
      <button
        id={'pointerLockButton'}
        className={
          'absolute h-5 w-5 bg-white z-30 select-none	cursor-crosshair transform -translate-x-1/2 -translate-y-1/2 text-white rounded-full inset-1/2'
        }
        style={{ visibility: visibilityState }}
      ></button>
    </>
  )
}
