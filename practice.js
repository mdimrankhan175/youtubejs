
















function isPalindrome(inputString){
    let givenString=inputString.toLowerCase();
    let reversedStr=givenString.split("").reverse().join("")
    let result= (givenString===reversedStr) ? "It is Palindrome":"It is not a Palindrome"
    console.log(result)
}

let str="Madam";
isPalindrome(str)
   