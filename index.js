'use strict'

const IPFS = require('ipfs')

async function main () {
  const node = await IPFS.create()
  const version = await node.version()

  console.log('Version:', version.version)

  const filesAdded = await node.add({
    path: 'hello.txt',
    content: Buffer.from('Hello World happy good nice..')
  })

  console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

  const fileBufferHash = await node.cat(filesAdded[0].hash)

  console.log('Added file contents:', fileBufferHash.toString())

  console.log('https://ipfs.io/ipfs/'+filesAdded[0].hash)


}

main()