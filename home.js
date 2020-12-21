let home = new Object;

home.toggleVisability = function() {
	if (document.getElementById("home").style.display == "none") {
		document.getElementById("home").style.display = "initial";
		document.getElementById("cards").id = "NOTHING";
	} else {
		document.getElementById("home").style.display = "none";
		document.getElementById("NOTHING").id = "cards";
	}
}