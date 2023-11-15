import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { randomWords } from './index.js'

describe('randomWords()', () => {
  it('should return random words', () => {
    const words = randomWords()
    assert.equal(words.length, 4, 'randomWords did not return words.')
    words.forEach((word) =>
      assert.equal(word.length, 8, 'Random did not return word of length 8.')
    )
  })
})
