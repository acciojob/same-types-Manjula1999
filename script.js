function isSameType(value1, value2) {
  //your js code here
	if( isNan(value1) &&  isNan(value2)){
		return true;
	}
if else(isNan(value1) || isNan(value2)){
	return false;
}
		return typeof value1 === typeof value2;
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
