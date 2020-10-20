const numbers = {
    0: [""],
    1: ["one", "ten", "one hundred"],
    2: ["two", "twenty", "two hundred"],
    3: ["three", "thirty", "three hundred"],
    4: ["four", "forty", "four hundred"],
    5: ["five", "fifty", "five hundred"],
    6: ["six", "sixty", "six hundred"],
    7: ["seven", "seventy", "seven hundred"],
    8: ["eight", "eighty", "eight hundred"],
    9: ["nine", "ninety", "nine hundred"],
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'

};

module.exports = function toReadable (number) {
    let stringNumber = number.toString().split('').reverse();

    if(number > 10 && number < 20)
        stringNumber = numbers[number]
    else{
        stringNumber = stringNumber.map((num, index) => numbers[num][index]).reverse();

        if(number.toString().split('')[stringNumber.length - 2] === '1') {
            stringNumber[stringNumber.length - 2] = numbers[number % 100];
            stringNumber.pop();
        }

        if (number !== 0){
            stringNumber = stringNumber.filter(num => num !== '' && num !== undefined)
        }
        stringNumber = stringNumber.join(' ');
        }

    return number === 0 ? 'zero' : stringNumber;
}
