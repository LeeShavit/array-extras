'use strict'

// Write the function capitalizeLongerThan5(strs) – gets an
// array of strings and returns a new array in which strings that are
// longer than 5 are capitalized (starts with uppercase)

var input = ['abcdefg', 'xyz']
var expected = ['Abcdefg', 'xyz']
var actual = capitalizeLongerThan5(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)


function capitalizeLongerThan5(strs) {
    const capitalizedStrs = strs.map(str => {
        if (str.length > 5) return capitalizeFirstLetter(str)
        else return str
    })
    return capitalizedStrs
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}