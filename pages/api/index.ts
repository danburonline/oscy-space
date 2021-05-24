import { Request, Response } from 'express';

export default (req: Request, res: Response): void => {
  res.send('Welcome to the Oscy Scene API. Read the Wiki on our GitHub repo for more information: https://github.com/danburonline/oscy-space/wiki')
}