import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'

type PointerLockButtonProps = {
  setAudioState: () => void
}

export default function BackHomeButton(
  props: PointerLockButtonProps
): JSX.Element {
  const homeButton = <FontAwesomeIcon icon={faHome} />
  return (
    <>
      <Link href='/'>
        <a
          title='Go to the home page'
          data-tip='Go to the home page'
          role='button'
          className='absolute bottom-0 left-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out rounded-md cursor-pointer bg-primary duration-350 hover:bg-hover'
          onClick={() => {
            props.setAudioState()
          }}
        >
          {homeButton}
        </a>
      </Link>
      <ReactTooltip />
    </>
  )
}
