const utilities = require('./utils/index')

class Operations {
  static add (a, b, conversionType = 1) {
    const point = Math.max(utilities.digit(a), utilities.digit(b))
    let ans = utilities.numberToPlain(a, point) + utilities.numberToPlain(b, point)
    const params = {
      ans: ans.toString(),
      type: 0,
      point
    }
    ans = utilities.setDecimal(params)
    return utilities.conversionTypes[conversionType](ans)
  }

  static subtract (a, b, conversionType = 1) {
    const point = Math.max(utilities.digit(a), utilities.digit(b))
    let ans = utilities.numberToPlain(a, point) - utilities.numberToPlain(b, point)
    const params = {
      ans: ans.toString(),
      type: 0,
      point
    }
    ans = utilities.setDecimal(params)
    return utilities.conversionTypes[conversionType](ans)
  }

  static multiply (a, b, conversionType = 1) {
    const aDigit = utilities.digit((a))
    const bDigit = utilities.digit((b))
    const point = aDigit + bDigit
    let ans = utilities.numberToPlain(a, aDigit) * utilities.numberToPlain(b, bDigit)
    const params = {
      ans: ans.toString(),
      type: 1,
      point
    }
    ans = utilities.setDecimal(params)
    return utilities.conversionTypes[conversionType](ans)
  }

  static divide (a, b, conversionType = 1) {
    if (a === 0 && b === 0) return utilities.conversionTypes[conversionType](0)
    const aDigit = utilities.digit((a))
    const bDigit = utilities.digit((b))
    const point = Math.abs(aDigit - bDigit)
    let ans = parseInt(utilities.numberToPlain(a, aDigit)) / parseInt(utilities.numberToPlain(b, bDigit))
    const params = {
      ans: ans.toString(),
      type: 2,
      point,
      aDigit,
      bDigit
    }
    ans = utilities.setDecimal(params)
    return utilities.conversionTypes[conversionType](ans)
  }
}

module.exports = Operations
