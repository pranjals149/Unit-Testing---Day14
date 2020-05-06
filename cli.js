const opr = require('./operations.js')
const readline = require('readline')

// Use readline to create command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(`
    Welcome to our Command Line Interface implemented with Node.Js 
    For the user's convenience, it will prompt for two numbers, 
    and ask the users to enter the numbers of their choice
    `)

rl.question('Enter the first number: ', x => {
  rl.question('Enter the second number: ', y => {
    rl.question(
      `
    Please select numbers for performing the following operations:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    Enter your choice: `, (choice) => {
          switch (choice) {
            case '1':
              console.log(`Addition of ${x} and ${y} is ${opr.add(x, y)}.`)
              break;
            case '2':
              console.log(`Subtraction of ${x} and ${y} is ${opr.subtract(x, y)}.`)
              break;
            case '3':
              console.log(`Multiplication of ${x} and ${y} is ${opr.multiply(x, y)}.`)
              break;
            case '4':
              console.log(`Division of ${x} and ${y} is ${opr.divide(x, y)}.`)
              break;
            default:
              console.log('Please select a number between 1 and 4.')
              break;
          }
        
        rl.close()
      }
    )
  })
})