//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//	
let info = new Object;
info.move = "no move";
info.answer = "no answer";
info.currentPlayer = 1;

info.suggestedMove = function() {
	let suspect = Math.floor((Math.random() * 6) + 0);
	let weapon = Math.floor((Math.random() * 6) + 6);
	let room = Math.floor((Math.random() * 6) + 12);
	
	suspect = getKeyByValue(sheet.key, suspect);
	weapon = getKeyByValue(sheet.key, weapon);
	room = getKeyByValue(sheet.key, room);
	
	if (sheet.cards[1] == guessMade) {
		this.playerIncrease();
	}
	
	this.move = this.currentPlayer + " g " + " " + suspect + " " + weapon + " " + room;
}

info.playerIncrease = function() {
	let que = makeQue(this.currentPlayer - 1);
	this.currentPlayer = que[1] + 1;	
}

info.update = function() {
	this.suggestedMove();
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