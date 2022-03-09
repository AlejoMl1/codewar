function differentiate(str) {
    //Write your code here
    if (str === 'x') return '1'
    let indexOfX= str.indexOf('x')
    if(indexOfX<0) return '0'
    let arrayStr =  str.split('x')
    let firstTerm = arrayStr[0] ==='-'? -1: parseInt(arrayStr[0])
    let secondTerm =parseInt(arrayStr[1].slice(1))
    if (!firstTerm ) {
        if(secondTerm-1 !=0 && secondTerm-1 !=1) {
            if (secondTerm ===1) return `x^${(secondTerm-1).toString()}`
            if (secondTerm ===-1) return `-x^${(secondTerm-1).toString()}`
            return `${secondTerm.toString()}x^${(secondTerm-1).toString()}`
        }
        return `${secondTerm.toString()}x`
    }
    if (!secondTerm) return `${firstTerm}`
    firstTerm *= secondTerm 
    secondTerm -= 1
    if(firstTerm ===1 ) return `x^${secondTerm.toString()}`
    if(firstTerm ===-1 ) return `-x^${secondTerm.toString()}`
    if(secondTerm ==1 ) return `${firstTerm.toString()}x`
    return `${firstTerm.toString()}x^${secondTerm.toString()}`
}

  console.log(differentiate("x"))
  module.exports = differentiate;
  // "3x^2"  => "6x"
// "-5x^3" => "-15x^2"
// "6x^-2" => "-12x^-3"
// "5x"    => "5"
// "-x"    => "-1"
// "42"    => "0"
