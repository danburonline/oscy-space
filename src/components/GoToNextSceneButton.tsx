import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { GoToNextSceneButtonProps, currentSiteEnum } from '../types/types'
import ReactTooltip from 'react-tooltip'

export default function GoToNextSceneButton(
  props: GoToNextSceneButtonProps
): JSX.Element {
  const nextSceneButton = <FontAwesomeIcon icon={faSignOutAlt} />
  let link = ''
  if (props.currentSite === currentSiteEnum.GORGE) {
    link = 'forest'
  } else {
    link = 'gorge'
  }

  return (
    <>
      <div
        title='Go to the other room'
        data-tip='Go to the other room'
        role='button'
        className='absolute bottom-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out rounded-md cursor-pointer left-12 bg-primary duration-350 hover:bg-hover'
        // eslint-disable-next-line no-undef
        onClick={() => (window.location.pathname = link)}
      >
        {nextSceneButton}
      </div>
      <ReactTooltip />
    </>
  )
}
