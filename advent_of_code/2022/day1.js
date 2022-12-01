// loop through a file and add each number to an array of arrays.
// an empty line should be a new array

const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const groups = input.split('\n\n').map((group) => {
    return group.split('\n');
});

let sum = 0;
let sums = [];

groups.forEach(group => {
    let newSum = group.reduce((acc, curr) => parseInt(curr) + parseInt(acc), 0);
    if (newSum > sum) {
        sum = newSum;
    }
    sums.push(newSum);
})
console.log(sum);
sums.sort((a, b) => b - a);
console.log(sums[0] + sums[1] + sums[2]);