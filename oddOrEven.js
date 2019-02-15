// Update the following function to take an argument and output 'Even' if the argument is an even number or 'Odd' if the number is an odd number.

function oddOrEven(number){
    if (number%2 === 0){
        return 'Even'
    }else {
        return 'Odd'
    }

}

console.log('result is ' + oddOrEven(4))
console.log('result is ' + oddOrEven(11))
console.log('result is ' + oddOrEven(75))
