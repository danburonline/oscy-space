// @ts-nocheck

import Sound from 'react-sound'
import wavURL from '../../../public/sounds/ambientStereoSound.wav'

export default function AmbientSound(props) {
  let state = ''
  if(props.state){
      state = Sound.status.PLAYING
  }else{
      state = Sound.status.PAUSED
  }
  
  return (
    <Sound
      url={wavURL}
      autoLoad={true}
      playStatus={state}
      loop={true}
      volume={100}
    />
  )
}