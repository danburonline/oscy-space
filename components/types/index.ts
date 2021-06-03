export enum ROOM {
  A = "a",
  B = "b"
}

export type roomProps = {
  playerInitPosition: number[]
  setSelectedRoom: () => void
}