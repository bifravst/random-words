const { randomWords } = require('./index')

const tests = async () => {
  const words = await randomWords()
  if (words.length !== 4) {
    console.log(words)
    throw new Error('Random did not return words.')
  }
  words.forEach(word => {
    if (word.length !== 8) {
      console.log(word)
      throw new Error('Random did not return word of length 8.')
    }
  })
}

tests()
