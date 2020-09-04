const acronymize = (sentence) => {
  // 1. Split the sentence into words
  const words = sentence.split(' ')
  // 2. Initialize an empty array `letters`
  const letters = []
  // 3. Iterate over words, for each word, select the first letter (how?)
  // and store it in `letters`
  words.forEach(word => {
    letters.push(word[0])
  })
  // 4. Join elements of `letters`, uppercase it and return it
  return letters.join('').toUpperCase()
}

console.log(acronymize('Frequently Asked Questions') === 'FAQ')
console.log(acronymize('') === '')
console.log(acronymize('AWAY FROM KEYBOARD') === 'AFK')
console.log(acronymize('working from home') === 'WFH')
