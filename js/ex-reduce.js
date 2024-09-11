'use strict'

var emps = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 5,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 15,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
];

// All experience sum
function getTotalExp(emps) {
    return emps.reduce((acc, emp) => acc += emp.yearsExperience, 0)
}

//  Sum each department's collective experience (create a map object dept -> experience)
function sumDepTotalExp(emps) {
    return emps.reduce((acc, emp) => {
        if (!acc[emp.department]) {
            acc[emp.department] = emp.yearsExperience
        } else {
            acc[emp.department] += emp.yearsExperience
        }
        return acc
    }, {})
}

// ● Group employees by experience (an object in which the key is a
// number and the value is an array of employee objects)
// (create a map object experience ->{key:[{employee}, {employee}]})

function groupEmpsByExp(emps) {
    return emps.reduce((acc, emp) => {
        if (!acc[emp.yearsExperience]) {
            acc[emp.yearsExperience] = [emp]
        } else {
            acc[emp.yearsExperience].push(emp)
        }
        return acc
    }, {})
}

// ● Count the number of employees in each department
// (create a map object dept -> empCount)

function countEmpsInEachDep() {
    return emps.reduce((acc, emp) => {
        if (!acc[emp.department]) {
            acc[emp.department] = 1
        } else {
            acc[emp.department]++
        }
        return acc
    }, {})
}


// 2. Write a function findModes(values) that gets an array and uses
// Array.reduce to create a map and then prints the numbers that occur most
// often.

const nums = [1, 4, 7, 4, 2, 5, 8, 9, 5, 6, 4, 2, 4, 5, 2, 3, 4, 5, 6, 5, 7, 8, 4, 3, 5, 7, 2, 3]

function findModes(nums) {
    const modesMap = nums.reduce((map, num) => {
        if (!map[num]) map[num] = 1
        else map[num]++
        return map
    }, {})
    console.log(modesMap)
    var modes = []
    for (const key in modesMap) {
        modes.push({ num: key, sum: modesMap[key] })
    }
    modes.sort((a, b) => b.sum - a.sum)
    const mostModes = modes.filter(item => item.sum >= modes[0].sum)
    console.log(mostModes)
}


// 3. Write a function flatten(values) that flattens the array, meaning that
// if an item in this array is an array, it will push all its values to the result
// array.
// c. support only one level of nested values
// d. Bonus: use recursion to support any level

var input = ['Hello', [9, 6], 18, [4, [7, 6, [4, 5]], 8]]
var expected = ['Hello', 9, 6, 18, 4, 7, 6, 4, 5, 8]
var actual = flatten(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function flatten(values) {
    const flatVals = values.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc.push(...flatten(item))
        } else {
            acc.push(item)
        }
        return acc
    }, [])
    return flatVals
}