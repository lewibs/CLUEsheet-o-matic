//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//
let game = new Object;

game.start = function() {
	sheet.getPlayers();
	sheet.updatePlayers();
	sheet.clearBlankPlayers();
	sheet.readCards();
	game.update();
	game.toggleVisability();
}

game.update = function() {
	sheet.readCards();
	//think
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

 