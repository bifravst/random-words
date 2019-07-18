#!/usr/bin/env node
const { randomWords } = require('./index')

const cli = async () => {
  const words = await randomWords()
  process.stdout.write(words.join(' '))
}

cli()
