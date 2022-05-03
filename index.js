

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz")
//     }
//     else if ( i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

for ( let i =1; i <= 1000; i++){
    let result = ''

    if (i % 3 === 0) result += 'Fizz'
    if (i % 5 === 0) result += 'Buzz'
    if (i % 7 === 0) result += 'Fish'
    if (i % 9 === 0) result += 'Bus'
    
    if ( result === '') console.log(i)
    else {
        console.log(result)
    }
}