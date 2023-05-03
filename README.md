# math-ops

Our library provides a comprehensive solution for performing precise mathematical operations in JavaScript.
It ensures accuracy and reliability and offers the flexibility to convert results from a number to a string data type to avoid rounding errors.

## Need

To avoid floating-point and rounding errors in JS

```bash
  5.33 + 5.2 === 10.530000000000001                              //should be 0.3
  0.396951913104453 + 0.29443589412502646 === 0.6913878072294795 //should be 0.69138780722947946
  8.13 - 5.75 === 2.380000000000001                              //should be 2.38
  8.38 * 0.3 === 2.5140000000000002                              //should be 2.514
  99.27 / 3 === 33.089999999999996                               //should be 33.09
```

## Installation

Install math-ops with npm

```bash
  npm install math-ops --save
```

## Methods

```bash
  ops.add(num1, num2)       //perform accurate addition of two numbers
  ops.subtract(num1, num2)  //perform accurate subtraction of two numbers
  ops.multiply(num1, num2)  //perform accurate multiplication of two numbers
  ops.divide(num1, num2)    //perform accurate division of two numbers
```

## Usage/Examples

```javascript
import ops from 'math-ops'

ops.add(5.33, 5.2) // = 10.53, not 10.530000000000001
ops.subtract(8.13, 5.75) // = 2.38, not 2.380000000000001
ops.multiply(8.38, 0.3) // = 2.514, not 2.5140000000000002
ops.divide(99.27, 3) // = 33.09, not 33.089999999999996
```

To mitigate the effects of rounding errors, it is recommended to convert the numerical answer to a string format.
This can be achieved by passing the value of 2 as a parameter when calling the relevant method. By doing so, the numerical value will be represented as a string, thereby avoiding any potential inaccuracies that may result from rounding.

```javascript
ops.add(0.396951913104453, 0.29443589412502646) // = 0.6913878072294795, not 0.69138780722947946
ops.add(0.396951913104453, 0.29443589412502646, 2) // = '0.69138780722947946'
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

