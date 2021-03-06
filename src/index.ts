import express, { Request as req, Response as res } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/', express.static(path.join(__dirname, '../pages/home')));
app.use('/home', express.static(path.join(__dirname, '../pages/home')));

app.get('/icon', (req: req, res: res) => {
  res.sendFile(path.join(__dirname, '../pages/assets/f.ico'));
});

app.get('/palm_tree', (req: req, res: res) => {
  res.sendFile(path.join(__dirname, '../pages/assets/palm_tree.png'));
});

app.get('*', (req: req, res: res) => {
  res.sendFile(path.join(__dirname, '../pages/error/index.html'));
});
