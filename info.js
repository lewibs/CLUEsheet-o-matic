//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//	
let info = new Object;
info.move = "no move";
info.answer = "no answer";

info.update = function() {
	document.getElementById("move").innerHTML = this.move;
	document.getElementById("answer").innerHTML = this.answer;
}

info.toggleVisability = function() {
	if (document.getElementById("info").style.display == "none") {
		document.getElementById("info").style.display = "initial";
	} else {
		document.getElementById("info").style.display = "none";
	}
}