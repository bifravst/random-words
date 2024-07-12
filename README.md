# Generate random 8 letter words [![npm version](https://img.shields.io/npm/v/@bifravst/random-words.svg)](https://www.npmjs.com/package/@bifravst/random-words)

[![Test and Release](https://github.com/bifravst/random-words/actions/workflows/test-and-release.yaml/badge.svg?branch=saga)](https://github.com/bifravst/random-words/actions/workflows/test-and-release.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![@commitlint/config-conventional](https://img.shields.io/badge/%40commitlint-config--conventional-brightgreen)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

Returns random 8-letter words from the
[Webster's Unabridged Dictionary](http://www.gutenberg.org/ebooks/29765).

## Installation

    npm i --save-dev --save-exact @bifravst/random-words

## Usage

    npm i --save --save-exact @bifravst/random-words

```javascript
import { randomWords } from "@bifravst/random-words";

console.log(randomWords()); // [ 'scoparin', 'prowling', 'priedieu', 'gantline' ]
```

## CLI Usage

    npx @bifravst/random-words
    # npx: installed 4 in 1.216s
    # catopron allodium registry misalter
