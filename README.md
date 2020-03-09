# Generate random 8 letter words

[![GitHub Package Registry version](https://img.shields.io/github/release/bifravst/random-words.svg?label=GPR&logo=github)](https://github.com/bifravst/random-words/packages/26700)
[![GitHub Actions](https://github.com/bifravst/random-words/workflows/Test%20and%20Release/badge.svg)](https://github.com/bifravst/random-words/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

Returns random 8-letter words from the [Webster's Unabridged Dictionary](http://www.gutenberg.org/ebooks/29765).

## Installation

> Note: This package is hosted on the GitHub package registry and 
> [npm needs to be configured](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#installing-a-package)
> in order to use it.

    echo "@bifravst:registry=https://npm.pkg.github.com" >> .npmrc
    npm i --save-dev @bifravst/random-words

## Usage

    npm i --save @bifravst/random-words

```javascript
const { randomWords } = require('@bifravst/random-words')

randomWords()
    .then(console.log) // [ 'scoparin', 'prowling', 'priedieu', 'gantline' ]
```

## CLI Usage

    npx @bifravst/random-words
    # npx: installed 4 in 1.216s
    # catopron allodium registry misalter    
