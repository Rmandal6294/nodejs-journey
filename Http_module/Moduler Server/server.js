import { createServer } from 'http'
import homeRoute from './routes/home.js'

const server = createServer(homeRoute);

server.listen(3000, () => {
  console.log('✅ Server started at http://localhost:3000');
});
