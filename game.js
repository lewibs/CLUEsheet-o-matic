//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//
let game = new Object;

game.start = function() {
	sheet.resetMark();
	sheet.getPlayers();
	sheet.updatePlayers();
	sheet.clearBlankPlayers();
	game.update();
	game.toggleVisability();
}

game.update = function() {
	sheet.storeCards();
	sheet.readCards(sheet.log.length-1);
	sheet.think();
	sheet.update();
	info.update();
	input.update();
}

game.toggleVisability = function() {
	home.toggleVisability();
	input.toggleVisability();
	sheet.toggleVisability();
	info.toggleVisability();
}

game.undo = function() {
	//this overwrites the functions
	sheet.suspects = makeArray(6,6);
	sheet.weapons = makeArray(6,6);
	sheet.rooms = makeArray(9,6);
	
	//these have to be called here because they get over written above
	sheet.resetMark();
	
	sheet.log.pop();
	for(let i = 0; i < sheet.log.length; i++) {
		sheet.readCards(i);
		sheet.think();
	}
	
	sheet.clearBlankPlayers();
	
	sheet.update();
	info.update();
	input.update();
}

 