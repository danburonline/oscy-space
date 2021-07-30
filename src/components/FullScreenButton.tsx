/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { faCompress } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function BackHomeButton(): JSX.Element {
  const fullScreenOn = <FontAwesomeIcon icon={faExpand} />
  const fullScreenOff = <FontAwesomeIcon icon={faCompress} />
  const [fullScreen, setFullScreen] = useState(false)
  const [f11, setF11] = useState(false)
  const buttonText = fullScreen ? fullScreenOff : fullScreenOn
  const titleText = fullScreen ? 'Exit fullscreen' : 'Enter fullscreen'
  const visibilityState = f11 ? 'hidden' : 'visible'

  React.useEffect(() => {
    document
      .getElementById('webGL')
      .addEventListener('fullscreenchange', () => {
        setFullScreen(prevState => !prevState)
      })
    document.addEventListener('keydown', event => {
      if (event.key === 'F11' && fullScreen) {
        setF11(prevState => !prevState)
      }
    })
  }, [])

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    } else {
      if (!document.mozFullScreen && !document.webkitFullScreen) {
        if (webGL.requestFullscreen) {
          webGL.requestFullscreen()
        } else if (webGL.mozRequestFullScreen) {
          webGL.mozRequestFullScreen()
        } else if (webGL.webkitRequestFullScreen) {
          webGL.webkitRequestFullScreen()
        } else if (webGL.msRequestFullscreen) {
          webGL.msRequestFullscreen()
        }
      }
    }
  }

  return (
    <button
      title={titleText}
      id={'fullScreenButton'}
      style={{ visibility: visibilityState }}
      onClick={() => {
        toggleFullscreen()
      }}
      className='absolute bottom-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out bg-blue-600 rounded-md cursor-pointer right-11 duration-350 hover:bg-blue-800'
    >
      {buttonText}
    </button>
  )
}
