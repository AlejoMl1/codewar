 function solution(strRoman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    let integerValueOfRomanLetter = {
        "I": 1,
        'V': 5,
        'X': 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    if (strRoman.length == 1)return integerValueOfRomanLetter[strRoman]
    return strRoman.split('').reduce((total, nextLetter, index, arrayOfLetters) => {
        let actualValue = integerValueOfRomanLetter[nextLetter] 
        let previousValue = integerValueOfRomanLetter[arrayOfLetters[index-1]]
        let shouldSubstract = actualValue > previousValue
        if (arrayOfLetters.length ===1) return actualValue
        if (shouldSubstract) return total = total - previousValue  + (actualValue-previousValue) 
        return total + integerValueOfRomanLetter[nextLetter]
    },0)
}

// let roman = 'X'

// console.log(solution(roman))

module.exports = solution;

