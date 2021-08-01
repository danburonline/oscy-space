import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'

type ExpireProps = {
  delay: number
  children?: JSX.Element
}

export default function Expire(props: ExpireProps): JSX.Element {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      setVisible(false)
    }, props.delay)
  }, [props.delay])

  return (
    visible && (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          backgroundColor: '#171717',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {props.children}
        <Loader
          type='ThreeDots'
          color='#fff'
          height={50}
          width={50}
          timeout={0}
        />
      </div>
    )
  )
}
