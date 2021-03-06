import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import type { AudioButtonProps } from '../types/types'
import ReactTooltip from 'react-tooltip'

export default function AudioButton(props: AudioButtonProps): JSX.Element {
  const audioButtonOn = <FontAwesomeIcon icon={faVolumeUp} />
  const audioButtonOff = <FontAwesomeIcon icon={faVolumeMute} />
  const buttonText = props.state ? audioButtonOn : audioButtonOff
  const titleText = props.state ? 'Turn audio off' : 'Turn audio on'

  return (
    <>
      <button
        title={titleText}
        data-tip={titleText}
        onClick={props.onClick}
        className='absolute bottom-0 right-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out rounded-md cursor-pointer bg-primary duration-350 hover:bg-hover'
      >
        {buttonText}
      </button>
      <ReactTooltip />
    </>
  )
}
