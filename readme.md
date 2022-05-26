## How to upload big files using NodeJs Streams

1. Run command: `node -e "process.stdout.write(crypto.randomBytes(1e9))" >> ./src/big.file` to generate a big file
2. Start server: `node src/index.mjs`
3. Make request to the server: `curl localhost:8080 --output ./src/output.big`

The third command will download the file.