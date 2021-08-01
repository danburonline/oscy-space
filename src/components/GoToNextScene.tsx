import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { GoToNextSceneProps, currentSiteEnum } from '../types/types'

export default function GoToNextScene(props: GoToNextSceneProps): JSX.Element {
  const nextSceneButton = <FontAwesomeIcon icon={faSignOutAlt} />
  let link = ''
  if (props.currentSite === currentSiteEnum.GORGE) {
    link = '/forest'
  } else {
    link = '/gorge'
  }

  return (
    <Link href={link}>
      <a
        role='button'
        className='absolute bottom-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out rounded-md cursor-pointer left-12 bg-primary duration-350 hover:bg-hover'
      >
        {nextSceneButton}
      </a>
    </Link>
  )
}
