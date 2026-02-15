/*
Given a list of strings comprised of a name and a Roman numeral, sort the list firstly by name and then by the decimal value of the Roman numeral.
In Roman numerals, a value is not repeated more than three times. A smaller value precedes a larger value to indicate subtraction. For example, I, II, III, IV, V, VI, VII, VIII, IX, X represent 1 through 10; and XX, XXX, XL, L represent 20, 30, 40, and 50. For any other two-digit number less than 50, concatenate the Roman numeral(s) representing its multiples of ten with the Roman numeral(s) for its values less than 10, e.g., 43 is 40 + 3 = 'XL' + 'III' = 'XLIII'.
For example, given names = ['Steven XL', 'Steven XVI', 'David IX', 'Mary XV', 'Mary XIII', 'Mary XX'].
The result array should be sorted by the Roman numerals as the return value, which is ['David IX', 'Mary XIII', 'Mary XV', 'Mary XX', 'Steven XVI', 'Steven XL'].
*/

const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
// roman to number convertor.
const romanToNumber = (roman) => {
    const rArr = roman.split('');// character array
    let returnValue = 0; // final number to return
    for (let i = 0; i < rArr.length; i++) {
        const currentValue = map[rArr[i]]; 
        const nextValue = map[rArr[i + 1]];
        if (nextValue && nextValue > currentValue) {
            // subtraction 
            returnValue -= map[rArr[i]];
        } else {
            // addition
            returnValue += map[rArr[i]];
        }
    }
    return returnValue;
}

const sortData = (strArr) => {
    //input : ['David IX', 'Mary XIII', 'Mary XV', 'Mary XX', 'Steven XVI', 'Steven XL']
    if (!strArr || !Array.isArray(strArr) || strArr.length === 1) {
        return strArr;
    }
    return strArr.sort((a, b) => {
        const [nameA, romanA] = a.split(" ");
        const [nameB, romanB] = b.split(" ");
        if (nameA !== nameB) {
            return nameA.localeCompare(nameB)
        }
        return romanToNumber(romanA) - romanToNumber(romanB);
    })
}

console.log(sortData(['David IX', 'Mary XIII', 'Mary XV', 'Mary XX', 'Steven XVI', 'Steven XL']));

