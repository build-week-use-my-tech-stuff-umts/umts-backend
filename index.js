import dd from 'debug';
import dotenv from 'dotenv';
import server from './api/server';

dotenv.config();
const debug = dd('App');

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  debug(`server live at localhost:${PORT}`);
});
