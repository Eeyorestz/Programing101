var array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T', 'U', 'V','W','X','Y','Z'];

function caesar_encrypt(str, n) {
	
	var strLen = str.length,
		str = str.toUpperCase(),
		count = 0,
		result = '',
		i = 0,
		letterIndex,
		letter,
		value;
	
	for ( i; i<strLen; i++ ) 
	{
		value = str[i];
		 
		letterIndex = array.indexOf(value);
		letter = letterIndex + n;

		
		if(letterIndex == -1){
			result += '*'
			continue;
		}
			
		if (letter > 25 ) {
			letter -=26;
		}
		
		result += array[letter];
	}
	
	console.log(result);
		
}

caesar_encrypt("dDe4Sz", 5);