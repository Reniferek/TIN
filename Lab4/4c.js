function palindrome(str) {
    var rmv = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var isPalindrome = rmv.split('').reverse().join('');
    
    if(rmv === isPalindrome) {
      console.log(str + " is a Palindrome");
    } else {
      console.log(str + " is not a Palindrome");
    }
}

palindrome("Kajak")
palindrome("Adam")
palindrome("3,6,9,0,9,6,3")
palindrome("123")