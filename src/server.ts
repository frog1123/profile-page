import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/', express.static(path.join(__dirname, '../pages/home')));
app.use('/home', express.static(path.join(__dirname, '../pages/home')));

app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../pages/error/index.html'));
});
