'use strict'

// Write the function reverseAll(strs) – gets an array of strings
// and returns a new array containing string reversed

var input = ['abc', 'xyz'];
var expected = ['cba', 'zyx']
var actual = reverseAll(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function reverseAll(strs) {
    strs.forEach((str, i, strs) => strs[i] = str.split('').reverse().join(''))
    return strs
}
