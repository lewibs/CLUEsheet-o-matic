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