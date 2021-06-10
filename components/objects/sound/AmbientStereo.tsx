import Sound from 'react-sound'

export default function AmbientSound(props) {
  let state = ''
  if(props.state){
      state = Sound.status.PLAYING
  }else{
      state = Sound.status.PAUSED
  }
  
  return (
    <Sound
      url='/sounds/ambientStereoSound.wav'
      autoLoad={true}
      playStatus={state}
      loop={true}
      volume={100}
    />
  )
}