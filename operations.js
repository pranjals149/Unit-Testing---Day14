const add = (x, y) => +x + +y,
      subtract = (x, y) => +x - +y,
      multiply = (x, y) => +x * +y,
      divide = (x, y) => +x / +y


const validateNumbers = (x, y) => {
    if (isNaN(x) && isNaN(y)) {
      return false
    }
    return true
  }

module.exports = { add, subtract, multiply, divide, validateNumbers }