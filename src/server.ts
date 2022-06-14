import express, { Request, Response } from 'express';
import path from 'path';

const api = express();
const port = process.env.PORT || 9000;

api.listen(port, () => console.log(`Listening on port ${port}`));

api.get('/home', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../pages/home/index.html'));
});

api.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../pages/error/index.html'));
});
