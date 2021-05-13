import { Request, Response } from 'express';

export default (req: Request, res: Response): void => {
  res.send({ name: 'Example API response' })
}
