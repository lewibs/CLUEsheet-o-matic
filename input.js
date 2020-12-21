//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//
let input = new Object;

input.update = function() {
	
}
input.toggleVisability = function() {
	if (document.getElementById("input").style.display == "none") {
		document.getElementById("input").style.display = "initial";
		document.getElementById("cards").id = "NOTHING";
	} else {
		document.getElementById("input").style.display = "none";
		document.getElementById("NOTHING").id = "cards";
	}
}