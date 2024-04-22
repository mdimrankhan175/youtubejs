let inputString=document.getElementById('inputString').value;    
let palBtn=document.getElementById('palBtn');
let palOutput=document.getElementById('palOutput');

palBtn.addEventListener('click', function(){
    let revisedString=inputString.toLowerCase();
    let revString=revisedString.split('').reverse().join('')
    let isPalindrome=(revisedString===revString) ? `${inputString} is a Palindrome`:'No Its Not a Palindrome'
    palOutput.textContent=isPalindrome
})

