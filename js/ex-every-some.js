'use strict'

// 1. Write a function allPassed(students) that gets an array of students
// (name, grade) and returns true if they all passed (grade >= 70)

const gStudents = [{ name: 'Dan', grade: 80 },
{ name: 'Mike', grade: 70 },
{ name: 'John', grade: 80 },
{ name: 'Sara', grade: 95 },
{ name: 'Lenny', grade: 100 }]


function allPassed(students) {
    return students.every(student => student.grade >= 70)
}

// 2. Write a function isGameOn(players) that gets an array of players
// (name,isAlive) and returns true if one of them is still alive

const gPlayers = [{ name: 'Dan', isAlive: false },
{ name: 'Mike', isAlive: false },
{ name: 'John', isAlive: true },
{ name: 'Sara', isAlive: false },
{ name: 'Lenny', isAlive: false }]

function isGameOn(players){
    return players.some(student => student.isAlive)
}

// 3. Write a function isMatrix(arr2d) that gets a 2d array and validate
// that it is a matrix (= all rows are of the same length)

const mat=[[1,2,3],[4,5,6],[7,8,9]]
const arr2d=[[1,2,3],[4,5,6,8,5,8],[7,8]]

function isMatrix(arr2d){
    const firstRowLength= arr2d[0].length
    return arr2d.every(row => (row.length === firstRowLength))
}


// 4. Bonus: Write a function isWide(arr2d) that gets a 2d array and check
// that at least one of its rows has more than 5 column


function isWide(arr2d){
    return arr2d.some(row => (row.length > 5))
}

// 5. Bonus: Write the function positiveRowsOnly (mat) – return only the
// rows in the matrix that have all positive integers
// TIP: use filter and every

var input = [[1, 10, -100],
            [2, -20, 200],
            [3, 30, 300]];
var expected = [[3, 30, 300]];
var actual = positiveRowsOnly(input)

//console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)

function positiveRowsOnly(mat){
    const positiveMat= mat.filter(row => row.every(num => num> 0))
    return positiveMat
}