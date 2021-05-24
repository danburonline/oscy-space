import { Request, Response } from 'express';
import { apiRoomTypes } from "./types"
import roomData from './roomData.json';

export default (req: Request, res: Response): void => {
  const { q: selectedRoom } = req.query

  if (selectedRoom == apiRoomTypes.ALL) {
    res.status(200).send(roomData)
  }

  // TODO More routes tbc
}