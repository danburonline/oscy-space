import type { PositionalAudio } from 'three'
import type { RefObject } from 'react'

export type PlayerProps = {
  position?: number[]
}

export type AmbientStereoSoundProps = {
  audioIsPlaying: boolean
  soundFileUrl: string
}

export type SoundObject = {
  id: number
  x: number
  y: number
  z: number
  position: number[]
  filePath: string
  name: string
  rotation: number
}

export type AmbientPositionalSoundProps = {
  soundObjects: SoundObject[]
  state: string
}

export type SoundObjectProps = {
  refs: RefObject<PositionalAudio>
  url: string
  volume: number
  rolloffFactor: number
  coneOuterGain: number
  state: string
}

export type CollisionBoxProps = {
  size: [height: number, width: number, depth: number]
  position: [x: number, y: number, z: number]
  scale: [x: number, y: number, z: number]
  rotation: number[]
  color: string
}
