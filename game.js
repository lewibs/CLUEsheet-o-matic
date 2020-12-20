import "@babel/register";

//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//GAME OBJECT//

let game = new Object;

game.start = function() {
	sheet.getPlayers();
	sheet.clearBlankPlayers();
	game.update();
}

game.update = function() {
	sheet.update();
	info.update();
	input.update();
}