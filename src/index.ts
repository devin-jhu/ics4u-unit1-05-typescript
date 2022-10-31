/**
 * The boardfoot program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-10-30
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Constants
const boardFoot = 144.0

/**
 * @param {number} height for the height of the wood
 * @param {number} width for the weight of the wood
 * @returns {number} length for the length of the wood
 */
function calcLength(height: number, width: number): number {
  const length = boardFoot / (height * width)
  return length
}

try {
  const inputWidth = prompt('Input height(inches): ')
  const width = parseFloat(inputWidth)
  const inputHeight = prompt('Input width(inches): ')
  const height = parseFloat(inputHeight)

  if (isNaN(height) || isNaN(width)) {
    console.log('Invalid Input')
  } else {
    console.log(`The wood will be ${calcLength(height, width)} inches long`)
  }
} catch (e) {
  console.log('Not a number')
}

console.log('\nDone.')
