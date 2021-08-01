import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function BlockMobile(): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        // eslint-disable-next-line no-undef
        navigator.userAgent
      )
    ) {
      // eslint-disable-next-line no-undef
      router.replace('/mobile')
    }
  }, [router])

  return null
}
