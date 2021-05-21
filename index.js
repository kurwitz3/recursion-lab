function printString(string){
    console.log(string[0]);

	if (string.length > 1) {
		let mySubString = string.substring(1, string.length);
		printString(mySubString);
	} else {
		return true;
	}
}

function reverseString(string){
    console.log(string);

	if (string === '') {
		return ''
	} else {
		return reverseString(string.substring(1)) + string[0]
	}
}

function isPalindrome(str){
    const strLen = str.length;
    if (strLen < 2) return true;

    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }

    return false;

}

function addUpTo(index,array){
   return array[index] + addUpTo(array,index -1)
    
  
}

