function convertToRoman(num) {
    if (num <= 0 || num > 100000) {
        return "Invalid Input";
    }

    // Use the provided object for Roman numeral symbols
    const obj = {
        0: ['M', 1000],
        1: ['CM', 900],
        2: ['D', 500],
        3: ['CD', 400],
        4: ['C', 100],
        5: ['XC', 90],
        6: ['L', 50],
        7: ['XL', 40],
        8: ['X', 10],
        9: ['IX', 9],
        10: ['V', 5],
        11: ['IV', 4],
        12: ['I', 1]
    };

    let roman = "";

    // Iterate over the values in the object
    for (let key in obj) {
        const [symbol, value] = obj[key];
        // While the number is greater than or equal to the value
        while (num >= value) {
            roman += symbol; // Add the Roman symbol
            num -= value;    // Subtract the value from the number
        }
    }

    return roman;
}

// Test cases
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(3999)); // Output: MMMCMXCIX
console.log(convertToRoman(0));    // Output: Invalid Input
console.log(convertToRoman(100000)); // Output: Invalid Input

// Do not edit below this line
module.exports = convertToRoman;
