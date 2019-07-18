# Generate random 8 letter words [![npm version](https://img.shields.io/npm/v/@bifravst/random-words.svg)](https://www.npmjs.com/package/@bifravst/random-words)

Returns random 8-letter words from the [Webster's Unabridged Dictionary](http://www.gutenberg.org/ebooks/29765).

Usage:

    npm i --save @bifravst/random-words

```javascript
const random = require('@bifravst/random-words')

random()
    .then(words => {
        console.log(words) // [ 'scoparin', 'prowling', 'priedieu', 'gantline' ]
    })
```
