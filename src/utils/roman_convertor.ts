function splitNumbers(number: number): number[]{
  const numbers: number[] = number.toString().split('').map((value, index) => {
    const separatedNumber = Number(value)
    return separatedNumber
  });

  return numbers.reverse()
}

export function convertor(number: number): string {
  const romanLetters = [
    ['I', 'II', 'III', 'IV', 'V','VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D','DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM'],
  ]
  const numerSplitted = splitNumbers(number)
  const result = numerSplitted.map((value, index) => {
    const letterNumver = romanLetters[index][value - 1]
    return letterNumver ?? ''
  })
  
  return result.reverse().join('')
}