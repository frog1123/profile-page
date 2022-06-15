import express from 'express';
import path from 'path';

const api = express();
const port = process.env.PORT || 9000;

api.listen(port, () => console.log(`Listening on port ${port}`));

api.use('/', express.static(path.join(__dirname, '../pages/home')));
api.use('/home', express.static(path.join(__dirname, '../pages/home')));
api.use('*', express.static(path.join(__dirname, '../pages/error')));
