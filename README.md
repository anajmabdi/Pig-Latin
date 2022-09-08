Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"


Test: "It will check for a vowel on the first letter of the word if not return word with 'ay' at the end" 
Code: pigLatin('b')
Expected Output:'bay'

Test: "It will split the word into an array"
Code: PigLatin("bed")
Expected Output: ["b", "e", "d"]

Test: "It will remove the first element"
Code: PigLatin("bed")
Expected Output: ["e", "d"]

Test: "It will add the first element to the end of the array"
Code: PigLatin("bed")
Expected Output: ["e", "d", "b",]

Test: "It will join the array into a word"
Code: PigLatin("bed")
Expected Output: ["e", "d", "b",]

Test: "It will add "ay" to the end"
Code: PigLatin("bed")
Expected Output: "edbay"
