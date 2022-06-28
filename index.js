const { words, count } = require('./words')
const randomNumber = require('random-number-csprng')

async function * randomWord () {
  while (true) {
    const number = await randomNumber(0, count - 1)
    yield words[number]
  }
}

module.exports = {
  randomWords: async ({ numWords } = { numWords: 4 }) => {
    const randomWords = []
    const r = randomWord()
    for (let i = 0; i < parseInt(numWords, 10); i++) {
      randomWords.push((await r.next()).value)
    }
    return randomWords
  }
}
