import decode from "audio-decode"
import buffer from "audio-lena/wav"
import { Request, Response } from 'express';

export default (req: Request, res: Response): void => {
  decode(buffer).then(audioBuffer => {
    res.send(audioBuffer)
  }, err => { console.log(err) });

  // res.send('Welcome to the Oscy Scene API. Read the Wiki on our GitHub repo for more information: https://github.com/danburonline/oscy-space/wiki')
}
