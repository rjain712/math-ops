class Utility {
  static conversionTypes = {
    1: Number,
    2: String
  }

  static digit (n) {
    if (n == parseInt(n)) return 0
    const numberArray = n.toString().split(/[eE]-/)
    return (numberArray[0].split('.')[1]?.length | 0) + (numberArray[1] | 0)
  }

  static numberToPlain (n, max) {
    const pointPosition = this.digit(n)
    if (n == parseInt(n)) {
      return (pointPosition === max) ? BigInt(n) : BigInt(n + '0'.repeat(max - pointPosition))
    }
    const numberArray = n.toString().split(/[eE]-/)
    const numberToString = numberArray[0].replace('.', '')
    return (pointPosition === max) ? BigInt(numberToString) : BigInt(numberToString + '0'.repeat(max - pointPosition))
  }

  static setDecimal (params) {
    let answer = params.ans
    let negative = false
    if (answer[0] === '-') {
      answer = answer.substring(1)
      negative = true
    }
    const type = params.type
    let final = ''
    switch (type) {
      case 0 : {
        let positionOfDecimal; const max = params.point
        if (answer.length >= max) {
          positionOfDecimal = answer.length - max
          final = answer.substring(0, positionOfDecimal) + '.' + answer.substring(positionOfDecimal)
        } else {
          positionOfDecimal = max - answer.length
          let string = '0.'
          for (let i = 1; i <= positionOfDecimal; i++) {
            string += '0'
          }
          final = string.concat(answer)
        }
        if (!(final.split('.')[0])) { final = '0' + final }
        if (negative) final = '-' + final
        if (!(final.split('.')[1])) final = final.split('.')[0]
        return final
      }

      case 1 : {
        const point = params.point
        final = ''
        if ((answer.length - point) > 0) {
          final = (answer.substring(0, (answer.length - point)) + '.' + answer.substring((answer.length - point), answer.length))
        } else {
          final = '0.' + '0'.repeat(point - answer.length) + answer
        }
        final = final.replace(/0+$/, '')
        final = this.dotSplit(final)[1] === '' ? this.dotSplit(final)[0] : final
        if (negative) final = '-' + final
        if (!(final.split('.')[1])) final = final.split('.')[0]
        return final
      }

      case 2: {
        let pointPosition = answer.indexOf('.')
        const aDigit = params.aDigit
        const bDigit = params.bDigit
        if (aDigit === bDigit) {
          if (negative) answer = '-' + answer
          return answer
        }
        const point = params.point
        if (pointPosition === -1) {
          pointPosition = answer.length
        }
        answer = answer.replace('.', '')
        let check, position
        if (aDigit > bDigit) {
          position = pointPosition - point
          check = position > 0 ? 1 : 0
        } else {
          position = pointPosition + point
          check = position < answer.length ? 1 : 0
        }
        final = ''
        if (check === 1 && aDigit > bDigit) {
          final = (answer.substring(0, position) + '.' + answer.substring((position), answer.length))
        } else if (check === 0 && aDigit > bDigit) {
          final = '0.' + '0'.repeat(Math.abs(position)) + answer
        } else if (check === 1 && bDigit > aDigit) {
          final = ((answer.substring(0, (position))) + '.' + (answer.substring((position), answer.length)))
        } else {
          final = answer + '0'.repeat((Math.abs(point)))
        }
        final = this.dotSplit(final)[1] === '' ? this.dotSplit(final)[0] : final
        final = this.dotSplit(final)[1] === undefined ? final : this.dotSplit(final)[0] + '.' + this.dotSplit(final)[1].replace(/0+$/, '')
        final = this.dotSplit(final)[1] === undefined ? this.dotSplit(final)[0] : final
        final = final.replace(/^0+/, '')
        final = this.dotSplit(final)[0] == 0 ? '0.' + this.dotSplit(final)[1] : final
        if (negative) final = '-' + final
        if (!(final.split('.')[1])) final = final.split('.')[0]
        return final
      }
    }
  }

  static eSplit (n) {
    return n.toString().split(/[eE]/)
  }

  static dotSplit (n) {
    return n.toString().split('.')
  }
}

module.exports = Utility
