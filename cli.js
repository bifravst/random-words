#!/usr/bin/env node
import { randomWords } from './index.js'

process.stdout.write(randomWords().join(' '))
