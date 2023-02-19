function romanToInteger(s) {
    const romanNumber = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {

        let curr = romanNumber[s[i]];
        let next = romanNumber[s[i + 1]];


        if (curr < next) {
            result += next - curr;
            i++
        }
        else {
            result += curr;
        }
    }

    return result;

}

console.log(romanToInteger("MCMXCIV")); // 1994
console.log(romanToInteger("V")); //5
console.log(romanToInteger("LVIII")); //58
console.log(romanToInteger("III"));//3