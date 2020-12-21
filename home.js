let home = new Object;
home.toggleVisability = function() {
	if (document.getElementById("home").style.display == "none") {
		document.getElementById("home").style.display = "initial";
	} else {
		document.getElementById("home").style.display = "none";
	}
}