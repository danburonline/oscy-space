import Sound from 'react-sound'

function PlayAmbientSound() {
  return (
    <Sound
      url={'/sounds/ambientStereoSound.wav'}
      playStatus={Sound.status.PLAYING}
      loop={true}
      volume={100}
    />
  )
}

export default PlayAmbientSound
