import React from 'react'

export default function blockMobile() {

    React.useEffect(() => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            window.location.href = '/mobile-browser'
          }else{
            //  window.location.href = '/mobile-browser'
          }
      }, [])

    return(
        null
    )

}
