'use strict'

//38
//Implement a function named biggerThan100. It receives an array of numbers and returns 
//a new array containing only the numbers which are greater than 100.

var nums = [20, 80, 100, 101, 50, 200, 96, 301, 801, 102, 22, 540]

function biggerThan100(nums) {  //old solution
    var bigNums = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 100) bigNums.push(nums[i])
    }
    return bigNums
}

const filteredNums = nums.filter(num => num > 100)


//44
// Write the function printNumsCount(nums).
// The parameter nums , is an array of integers in the range 0 - 3 like this one: |3|2|0|2|2|0|3|
// The function prints how many times each of these numbers appears in the array.
// Tip: the fact that the values are in a specific range allows us to use a second array, in which the index, is actually the number itself.
// The values of this second array, will store the occurrences of the numbers in nums.
// For example: INPUT: [3,2,0,2,2,0,3] EXPECTED: [2,0,3,2]

var nums = [3, 2, 0, 2, 2, 0, 3]
const countNums = [0, 0, 0, 0]

function printNumsCount(nums) { //old solution
    var counts = []
    var biggestnum = 0
    for (var i = 0; i < nums.length; i++) { //checks whats the biggest number
        if (nums[i] > biggestnum) biggestnum = nums[i]
    }
    for (var i = 0; i < biggestnum + 1; i++) {  //creates array with 0
        counts[i] = 0
    }
    for (var i = 0; i < nums.length; i++) { //counts every digit
        counts[nums[i]]++
    }
    console.log(counts)
}

nums.forEach(item => countNums[item]++)


//46


// Write the function: multBy(nums, multiplier)
// which modifies the nums array so that each of its items, is multiplied by multiplier.
// The function returns the modified array.
// Step2: Add another parameter to this function named isImmutable.
// When this parameter is true, use array.slice() 
//to perform the function’s calculation on a copy of the array, and leave the original array unchanged.
// The function should return the modified array.

var nums = [5, 4, 5, 2, 1, 2, 4]
var isImmutable = true
const multiplier = 3
var newNums

function multBy(nums, multiplier, isImmutable) { //old solution
    if (isImmutable) {
        var newNums = nums.slice()
        for (var i = 0; i < nums.length; i++) {
            newNums[i] *= multiplier
        }
        return newNums
    }
    for (var i = 0; i < nums.length; i++) {
        nums[i] *= multiplier
    }
    return nums
}

if (isImmutable) {
    newNums = nums.map(item => item * multiplier)
} else {
    nums.forEach((item,idx,arr) => arr[idx] = item * multiplier)
}

