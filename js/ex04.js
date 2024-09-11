'use strict'

// Write the function onlyVowels(strs) – gets an array of strings
// and returns a new array containing only vowels from each string:

var input = ['average', 'exceptional', 'amazing']
var expected = ['aeae', 'eeioa', 'aai']
var actual = onlyVowels(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function onlyVowels(strs) {
    return strs.map(str => getVowelsStr(str))
}


function getVowelsStr(str) {
    const letters = str.toLowerCase().split('')
    const vowels = letters.filter( letter => (letter === 'a' ||
                                                letter === 'e' ||
                                                letter === 'u' ||
                                                letter === 'o' || 
                                                letter === 'i'))
    return vowels.join('')
}