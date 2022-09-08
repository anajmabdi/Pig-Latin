const vowels = ['a','e','i','o','u'];

function pigLatinVowel(word){
  if (vowels.includes(word.charAt(0))) {
  return word.concat('way');
  } else {
    return word.concat('ay');
  }
}
