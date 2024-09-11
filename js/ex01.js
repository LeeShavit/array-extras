'use strict'

//ex01.js - Write the function onlyOneWord(strs) – returns only those
// strings with a single word (no spaces)
// var input = ['return', 'phrases', 'with o

var input = ['return', 'phrases', 'with one word'];
var expected = ['return', 'phrases']
var actual = onlyOneWord(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function onlyOneWord(input) {
    const oneWords = input.filter(item => !item.includes(' '))
    return oneWords
}