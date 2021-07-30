import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'

export default function BackHomeButton(props): JSX.Element {
  const audioButtonOn = <FontAwesomeIcon icon={faVolumeUp} />
  const audioButtonOff = <FontAwesomeIcon icon={faVolumeMute} />
  const buttonText = props.state ? audioButtonOn : audioButtonOff
  const titleText = props.state ? 'Turn audio off' : 'Turn audio on'

  return (
    <button
      title={titleText}
      onClick={props.onClick}
      className='absolute bottom-0 right-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out rounded-md cursor-pointer bg-primary duration-350 hover:bg-hover'
    >
      {buttonText}
    </button>
  )
}
