import { words } from './words.js'
import { randomInt } from 'node:crypto'

/* eslint-disable generator-star-spacing */
/* eslint-disable space-before-function-paren */
function* randomWord() {
  while (true) {
    const number = randomInt(0, words.length - 1)
    yield words[number]
  }
}

export const randomWords = ({ numWords } = { numWords: 4 }) => {
  const randomWords = []
  const r = randomWord()
  for (let i = 0; i < parseInt(numWords, 10); i++) {
    randomWords.push(r.next().value)
  }
  return randomWords
}
