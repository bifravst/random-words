#!/usr/bin/env node
const random = require('./index')

const cli = async () => {
  const words = await random()
  process.stdout.write(words.join(' '))
}

cli()
