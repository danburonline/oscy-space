import type { PositionalAudio } from 'three'
import type { RefObject } from 'react'

export type PlayerProps = {
  position?: number[]
}

export type AmbientStereoSoundProps = {
  state: boolean
  volume: number
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
  rolloffFactor: number
  coneOuterGain: number
  innerAngle: number
  outerAngle: number
  volume: number
}

export type AmbientPositionalSoundProps = {
  soundObjects: SoundObject[]
  state: boolean
}

export type SoundObjectProps = {
  refs: RefObject<PositionalAudio>
  url: string
  volume: number
  rolloffFactor: number
  coneOuterGain: number
  state: boolean
  innerAngle: number
  outerAngle: number
}

export type CollisionBoxProps = {
  position: [x: number, y: number, z: number]
  scale: [x: number, y: number, z: number]
  rotation: number[]
  size?: [height: number, width: number, depth: number]
  color?: string
}

export type AudioButtonProps = {
  state: boolean
  onClick: () => void
}

export enum currentSiteEnum {
  // eslint-disable-next-line no-unused-vars
  GORGE,
  // eslint-disable-next-line no-unused-vars
  FOREST
}

export type GoToNextSceneButtonProps = {
  currentSite: currentSiteEnum
}

export type DoorPortalProps = {
  position: [x: number, y: number, z: number]
  scale: [x: number, y: number, z: number]
  rotation: number[]
  size?: [height: number, width: number, depth: number]
  color?: string
  onCollide: () => void
}

export type HeaderProps = {
  title: string
  linkText: string
  linkUrl: string
  subTitle: string
}
