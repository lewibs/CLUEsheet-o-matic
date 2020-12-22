function checkForMatch(array1,array2) {
	//arrays must be equal length
	let array = [];
	for (let i = 0 ; i < array1.length ; i++){
		array[i] = array1[i] == array2[i];
	}
	return array;
}

function makeArray(r,c) {
	// Create a one dimensional array 
	// capable of storing 3 objects
	let  theArray = new Array(r); // Indices for the row
	  
	  
	// Loop through the array, adding a 
	// new array to each location
	for (let i = 0; i < theArray.length; i++) { 
		theArray[i] = new Array(c);// new arrays for the columns
	} 
	// Put items in the 2D array
	for (let r = 0; r < theArray.length; r++) {
		for (let c = 0; c < theArray[0].length; c++) {
			theArray[r][c]= null;
		}
	}
	
	return theArray;
}

function makeQue(start) {
	let order = [0,1,2,3,4,5,0];
	let newOrder = [];
	let j = start;
	for (let i = 0 ; i < 7 ; i++) {
		newOrder[i] = order[j];
		j++;
		if (j == 6) {
		 j = 0;
		}
	}
	return newOrder;
}

//object functions
function size(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}