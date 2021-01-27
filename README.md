# Generate random 8 letter words [![npm version](https://img.shields.io/npm/v/@nordicsemiconductor/random-words.svg)](https://www.npmjs.com/package/@nordicsemiconductor/random-words)

[![GitHub Actions](https://github.com/NordicSemiconductor/random-words-js/workflows/Test%20and%20Release/badge.svg)](https://github.com/NordicSemiconductor/random-words-js/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/NordicSemiconductor/random-words-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/NordicSemiconductor/random-words-js?targetFile=package.json)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://dashboard.mergify.io/badges/NordicSemiconductor/random-words-js)](https://mergify.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

Returns random 8-letter words from the [Webster's Unabridged Dictionary](http://www.gutenberg.org/ebooks/29765).

## Installation

    npm i --save-dev @nordicsemiconductor/random-words

## Usage

    npm i --save @nordicsemiconductor/random-words

```javascript
const { randomWords } = require("@nordicsemiconductor/random-words");

randomWords().then(console.log); // [ 'scoparin', 'prowling', 'priedieu', 'gantline' ]
```

## CLI Usage

    npx @nordicsemiconductor/random-words
    # npx: installed 4 in 1.216s
    # catopron allodium registry misalter
