import http from 'http';
import { createReadStream } from 'fs';

http.createServer((request, response) => {
  createReadStream('./src/big.file')
  .pipe(response)
}).listen(8080)
.on('listening', () => console.log(`Server is running on port 8080`));