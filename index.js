let input = document.getElementById("input")
let output = document.getElementById("output")
const vowels = ["a", "e", "i", "o", "u"]

const handleClick = () => {
    console.log(input.value)
    console.log('click')
    let pigLatinWord = pigLatin(input.value)
    output.innerHTML = pigLatinWord
}


let pigLatin = (word) => {
    word = word.trim().toLowerCase()
    if(vowels.includes(word[0])){
      return word + "yay"
    } else {
      // This is RegEx = Regiular Expressions
      let firstmatch = word.match(/[aeiou]/g) || 0
      console.log(firstmatch)
      // w3 school .indexOf()
      let vowel = word.indexOf(firstmatch[0])
      console.log(vowel)
      if(vowel === 0){
        return word + "ay"
      } else {
        // w3 School .substring()
        return word.substring(vowel) + word.substring(0,vowel) + 'ay'
      }
    }
  }