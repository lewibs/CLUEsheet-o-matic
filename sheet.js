//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//
let sheet = new Object;
sheet.suspects = makeArray(6,6);
sheet.weapons = makeArray(6,6);
sheet.rooms = makeArray(9,6);
sheet.players = makeArray(6,2);
sheet.cards = [];
sheet.log = [];
sheet.key = {
				//people
				"ms" : 0,
				"cm" : 1,
				"mw" : 2,
				"mg" : 3,
				"mp" : 4,
				"pp" : 5,
				//weapons
				"cs" : 6,
				"kn" : 7,
				"ro" : 8,
				"re" : 9,
				"lp" : 10,
				"wr" : 11,
				//rooms
				"ba" : 12,
				"bi" : 13,
				"co" : 14,
				"di" : 15,
				"ha" : 16,
				"ki" : 17,
				"li" : 18,
				"lo" : 19,
				"st" : 20
			}
	
//thinking stuff	
sheet.think = function() {
	for (let i = 0 ; i < 2; i++ ) { //some of these are dependent on order and rather then figure out the optimal order and possibly have contradictions i just ran it twice
		this.ifTwoFalse();//check for if the player showing the card has two of the cards and are unknown making the third the card they have known		
		this.didNotAnswer(); //they dont have any of the cards otherwise they would have answered
		this.samePlayer();//check if it loops back to the same player if all of their cards are known and the two others were known this is the mistery card if 
		this.playerAllKnown(); //this checks if all of the cards in that players hand are known and marks the column x if it is
		this.playerAllUnknown(); //this counts the unknown and if that is equal to 21 - 3 then it knows those 3 are the known cards
		this.checkRowForNull(); // this checks to see if the last thing in that row of noCard has been marked if not then it puts a question mark there
		this.cardKnown(); //this checks if that card is known and marks the row x if it is
		this.fullNoCard(); //this checks if this row is an answer
	}
}

sheet.checkRowForNull = function() {
	let card;
	for (let i = 0 ; i < size(sheet.key); i++) { //loop though all the cards
		card = getKeyByValue(sheet.key,i);
		if(this.countCardFor(card,noCard) == this.rooms[0].length - 1){ //check if every column has noCard	
			for(let playerInd = 0 ; playerInd < this.rooms[0].length; playerInd++) { //loop though the row and lable everything as answer card
				if (this.getCardMark(card, playerInd) == null) {
					this.mark(card,playerInd,maybeCard);
				}
			}
		}
	}
}

sheet.fullNoCard = function() {
	let card;
	for (let i = 0 ; i < size(sheet.key); i++) { //loop though all the cards
		card = getKeyByValue(sheet.key,i);
		if(this.countCardFor(card,noCard) == this.rooms[0].length){ //check if every column has noCard	
			for(let playerInd = 0 ; playerInd < this.rooms[0].length; playerInd++) { //loop though the row and lable everything as answer card
				this.mark(card,playerInd,answerCard);
			}
		}
	}
}

sheet.samePlayer = function() {
	let cards;
	let playerInd;
	let cardsBool;
	for (let i = 0 ; i < this.log.length ; i++) {
		if (this.log[i].length >= 6) { // does not run for K type
			cards = this.log[i];
			playerInd = cards[0]-1;
			if (cards[0] == cards[5]) {
				if (this.countPlayerFor(playerInd,yesCard) == this.players[playerInd][1]) { //only runs if it loops back and if all of the players cards are known
					cards = [cards[2],cards[3],cards[4]];
					cardsBool = [this.getCardMark(cards[0],playerInd) == yesCard,
								 this.getCardMark(cards[1],playerInd) == yesCard,
								 this.getCardMark(cards[2],playerInd) == yesCard
								];
								
					if(cardsBool.filter(Boolean).length == 2){
						cards = cards[cardsBool.indexOf(false)];
						for (let j = 0 ; j < this.rooms[0].length; j++) {
							this.mark(cards,j,answerCard);
						}
					}
				} else { //same thing as above but with a maybe
					cards = [cards[2],cards[3],cards[4]];
					cardsBool = [(this.getCardMark(cards[0],playerInd) == yesCard || this.getCardMark(cards[0],playerInd) == noCard),
								 (this.getCardMark(cards[1],playerInd) == yesCard || this.getCardMark(cards[1],playerInd) == noCard),
								 (this.getCardMark(cards[2],playerInd) == yesCard || this.getCardMark(cards[2],playerInd) == noCard)
								];
								
					if(cardsBool.filter(Boolean).length == 2){
						cards = cards[cardsBool.indexOf(false)];
						this.mark(cards,playerInd,maybeCard);
					}
					
					//can possibly do stuff here for if X O null or X O ?
					
				}
			}
		}
	}
}

//this is broken and having logical issues
//this checks that two of the guessed cards are known by everyone but the player showing making the third the shown card
//sheet.ifTwoTrue = function() {
//	let cards;
//	let cardsBool;
//	let playerInd;
//	for (let i = 0 ; i < this.log.length ; i++) {
//		if(this.log[i][0] != this.log[i][5] && this.log[i].length == 6) { //this only runs if a card is not shown in that example and it did not loop to the first player as it trys to find out what was shown which is why 6 is used
//			cards = [this.log[i][2],this.log[i][3],this.log[i][4]];
//			cardsBool = [this.countCardFor(cards[0],yesCard)==1,
//						 this.countCardFor(cards[1],yesCard)==1,
//						 this.countCardFor(cards[2],yesCard)==1
//						];
//			playerInd = this.log[i][5] - 1;
//			//check if two are known and return the third
//			if(cardsBool.filter(Boolean).length == 2){
//				cards = cards[cardsBool.indexOf(false)];
//				this.mark(cards,playerInd,yesCard);
//			}
//		}
//	}
//}

sheet.didNotAnswer = function() {
	let que;
	let cards = this.log[this.log.length - 1];
	if (cards[1] == guessMade) {
		que = makeQue(cards[0]-1); //minus one for player index
		que.shift(); que.pop(); que.splice(que.indexOf(cards[5]-1)); //minus one for player index
		for (let i = 0 ; i < que.length ; i++) {
			this.mark(cards[2],que[i],noCard);
			this.mark(cards[3],que[i],noCard);
			this.mark(cards[4],que[i],noCard);
		}
	}
}

sheet.ifTwoFalse = function(){
	let cards;
	let cardsBool;
	for (let i = 0 ; i < this.log.length; i++){ //goes through the entire log
		if(this.log[i].length == 6){ //if it is 6 then the format is 1 g cd cd cd 5
			cards = this.log[i];
			if(cards[0] != cards[5]){ //makes sure that it was not a loop around. as it is possible with a loop around that the player has all three cards
				playerInd = cards[5] - 1;
				cards = [cards[2],cards[3],cards[4]];
				cardsBool = [this.getCardMark(cards[0],playerInd) == noCard,
							 this.getCardMark(cards[1],playerInd) == noCard,
							 this.getCardMark(cards[2],playerInd) == noCard
							];
				//check if two are false and return the third
				if(cardsBool.filter(Boolean).length == 2){
					cards = cards[cardsBool.indexOf(false)];
					this.mark(cards,playerInd,yesCard);
				}
			}
		}
	}
}

sheet.playerAllKnown = function() {
	for (let playerInd = 0 ; playerInd < this.rooms[0].length; playerInd++) {
		if (this.countPlayerFor(playerInd,yesCard) == this.players[playerInd][1]) { //counts the known cards in that players index and checks it with how many cards they have.
			this.markCol(playerInd,noCard);
		}
	}
}

sheet.playerAllUnknown = function() {
	for (let playerInd = 0 ; playerInd < this.rooms[0].length; playerInd++) {
		if (this.countPlayerFor(playerInd,null) + this.countPlayerFor(playerInd,maybeCard) == this.players[playerInd][1]) { //counts the Unknown cards in that players index and checks it with how many cards they have.
			this.markCol(playerInd,noCard);
		}
	}
}

sheet.cardKnown = function() {
	let card;
	for (let i = 0; i < size(sheet.key); i++){
		card = getKeyByValue(sheet.key,i);
		if (sheet.countCardFor(card,yesCard) == 1) {
			sheet.markRow(card,noCard);
		}
	}
}

sheet.countCardFor = function(card,mark) {
	let row = this.key[card];
	let count = 0;
	if (row > 11) {
		row = row - 12;
		//rooms
		for(let col = 0; col < this.rooms[0].length; col++) {
			if (this.rooms[row][col] == mark) {
				count++;
			}
		}
	} else if (row > 5) {
		row = row - 6;
		//weapons
		for(let col = 0; col < this.weapons[0].length; col++) {
			if (this.weapons[row][col] == mark) {
				count++;
			}
		}
	} else {
		//suspects
		for(let col = 0; col < this.suspects[0].length; col++) {
			if (this.suspects[row][col] == mark) {
				count++;
			}
		}
	}
	return count;
}

sheet.countPlayerFor = function(playerInd,mark) {
	let col = playerInd;
	let count = 0;
	for (let row = 0; row < this.suspects.length; row++){
		if (this.suspects[row][col] == mark) {
			count++;
		}
	}
	for (let row = 0; row < this.weapons.length; row++){
		if (this.weapons[row][col] == mark ) {
			count++;
		}
	}
	for (let row = 0; row <this.rooms.length; row++){
		if (this.rooms[row][col] == mark) {
			count++;
		}
	}
	return count;
}

//normal sheet managment

sheet.getCards = function() {
	this.cards = document.getElementById('cards').value;
	this.cards = this.cards.split(" ");
	this.addToLog(this.cards);
}

sheet.addToLog = function(cards) {
	this.log[this.log.length] = cards;
}

sheet.readCards = function() {
	let playerInd;
	this.getCards();
	let type = this.cards[1];
	if (type == knownCard){
		playerInd = this.cards[0] - 1;
		for (let i = 2 ; i < this.cards.length ; i++){
			this.mark(this.cards[i],playerInd,yesCard);
		}
	} else if (type == guessMade && this.cards.length == 6) {
		playerInd = this.cards[5] - 1;
		for (let i = 2 ; i < 5 ; i++){
			this.mark(this.cards[i],playerInd,maybeCard);
		}
	} else if (type == guessMade && this.cards.length == 7) {
		playerInd = this.cards[5] - 1;
		this.mark(this.cards[6],playerInd,yesCard);
	} else {
		//nothing happens
	}
}

sheet.getCardMark = function(card,playerInd) {
	let cardInd = this.key[card];
	if (cardInd > 11) {
		cardInd = cardInd - 12;
		return this.rooms[cardInd][playerInd];
	} else if (cardInd > 5) {
		cardInd = cardInd - 6;
		return this.weapons[cardInd][playerInd];
	} else {
		return this.suspects[cardInd][playerInd];
	}
}

sheet.mark = function(card, playerInd, mark) {
	let cardInd = this.key[card];
	if (cardInd > 11) {
		cardInd = cardInd - 12;
		this.rooms.mark(cardInd,playerInd,mark);
	} else if (cardInd > 5) {
		cardInd = cardInd - 6;
		this.weapons.mark(cardInd,playerInd,mark);
	} else {
		this.suspects.mark(cardInd,playerInd,mark);
	}
}


sheet.suspects.mark = function (cardInd, playerInd, mark) {
	if (mark == answerCard) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == null) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == maybeCard) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == noCard && mark == yesCard) {
		this[cardInd][playerInd] = mark;
	}		
}

sheet.weapons.mark = function (cardInd, playerInd, mark) {
	if (mark == answerCard) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == null) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == maybeCard) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == noCard && mark == yesCard) {
		this[cardInd][playerInd] = mark;
	}
}

sheet.rooms.mark = function (cardInd, playerInd, mark) {
	if (mark == answerCard) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == null) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == maybeCard) {
		this[cardInd][playerInd] = mark;
	} else if (this[cardInd][playerInd] == noCard && mark == yesCard) {
		this[cardInd][playerInd] = mark;
	}
}

sheet.getPlayers = function() {
	this.players[0] = document.getElementById("p1").value.split(" ");
	this.players[1] = document.getElementById("p2").value.split(" ");
	this.players[2] = document.getElementById("p3").value.split(" ");
	this.players[3] = document.getElementById("p4").value.split(" ");
	this.players[4] = document.getElementById("p5").value.split(" ");
	this.players[5] = document.getElementById("p6").value.split(" ");
}

sheet.clearBlankPlayers = function() {
	for (let i = 0 ; i < this.players.length ; i++) {
		if( this.players[i] == "" ) {
			this.markCol(i,noCard);
		}
	}
}

sheet.markCol = function(col,mark) {
	for (let row = 0; row < this.suspects.length; row++){
		this.suspects.mark(row,col,mark);
	}
	for (let row = 0; row < this.weapons.length; row++){
		this.weapons.mark(row,col,mark);
	}
	for (let row = 0; row <this.rooms.length; row++){
		this.rooms.mark(row,col,mark);
	}
}

sheet.markRow = function(card,mark) {
	for (let playerInd = 0; playerInd < this.suspects[0].length; playerInd++) {	
		this.mark(card,playerInd,mark);
	}
}

sheet.updatePlayers = function() {
	document.getElementById("player1").innerHTML = "1." + this.players[0][0];
	document.getElementById("player2").innerHTML = "2." + this.players[1][0];
	document.getElementById("player3").innerHTML = "3." + this.players[2][0];
	document.getElementById("player4").innerHTML = "4." + this.players[3][0];
	document.getElementById("player5").innerHTML = "5." + this.players[4][0];
	document.getElementById("player6").innerHTML = "6." + this.players[5][0];
}

sheet.toggleVisability = function() {
	if (document.getElementById("sheet").style.display == "none") {
		document.getElementById("sheet").style.display = "initial";
	} else {
		document.getElementById("sheet").style.display = "none";
	}
}

sheet.update = function() {
	//suspects
	document.getElementById("s00").innerHTML = this.suspects[0][0];
	document.getElementById("s01").innerHTML = this.suspects[0][1];
	document.getElementById("s02").innerHTML = this.suspects[0][2];
	document.getElementById("s03").innerHTML = this.suspects[0][3];
	document.getElementById("s04").innerHTML = this.suspects[0][4];
	document.getElementById("s05").innerHTML = this.suspects[0][5];
	
	document.getElementById("s10").innerHTML = this.suspects[1][0];
	document.getElementById("s11").innerHTML = this.suspects[1][1];
	document.getElementById("s12").innerHTML = this.suspects[1][2];
	document.getElementById("s13").innerHTML = this.suspects[1][3];
	document.getElementById("s14").innerHTML = this.suspects[1][4];
	document.getElementById("s15").innerHTML = this.suspects[1][5];
	
	document.getElementById("s20").innerHTML = this.suspects[2][0];
	document.getElementById("s21").innerHTML = this.suspects[2][1];
	document.getElementById("s22").innerHTML = this.suspects[2][2];
	document.getElementById("s23").innerHTML = this.suspects[2][3];
	document.getElementById("s24").innerHTML = this.suspects[2][4];
	document.getElementById("s25").innerHTML = this.suspects[2][5];
	
	document.getElementById("s30").innerHTML = this.suspects[3][0];
	document.getElementById("s31").innerHTML = this.suspects[3][1];
	document.getElementById("s32").innerHTML = this.suspects[3][2];
	document.getElementById("s33").innerHTML = this.suspects[3][3];
	document.getElementById("s34").innerHTML = this.suspects[3][4];
	document.getElementById("s35").innerHTML = this.suspects[3][5];
	
	document.getElementById("s40").innerHTML = this.suspects[4][0];
	document.getElementById("s41").innerHTML = this.suspects[4][1];
	document.getElementById("s42").innerHTML = this.suspects[4][2];
	document.getElementById("s43").innerHTML = this.suspects[4][3];
	document.getElementById("s44").innerHTML = this.suspects[4][4];
	document.getElementById("s45").innerHTML = this.suspects[4][5];
	
	document.getElementById("s50").innerHTML = this.suspects[5][0];
	document.getElementById("s51").innerHTML = this.suspects[5][1];
	document.getElementById("s52").innerHTML = this.suspects[5][2];
	document.getElementById("s53").innerHTML = this.suspects[5][3];
	document.getElementById("s54").innerHTML = this.suspects[5][4];
	document.getElementById("s55").innerHTML = this.suspects[5][5];
	
	//weapons
	document.getElementById("w00").innerHTML = this.weapons[0][0];
	document.getElementById("w01").innerHTML = this.weapons[0][1];
	document.getElementById("w02").innerHTML = this.weapons[0][2];
	document.getElementById("w03").innerHTML = this.weapons[0][3];
	document.getElementById("w04").innerHTML = this.weapons[0][4];
	document.getElementById("w05").innerHTML = this.weapons[0][5];
	
	document.getElementById("w10").innerHTML = this.weapons[1][0];
	document.getElementById("w11").innerHTML = this.weapons[1][1];
	document.getElementById("w12").innerHTML = this.weapons[1][2];
	document.getElementById("w13").innerHTML = this.weapons[1][3];
	document.getElementById("w14").innerHTML = this.weapons[1][4];
	document.getElementById("w15").innerHTML = this.weapons[1][5];
	
	document.getElementById("w20").innerHTML = this.weapons[2][0];
	document.getElementById("w21").innerHTML = this.weapons[2][1];
	document.getElementById("w22").innerHTML = this.weapons[2][2];
	document.getElementById("w23").innerHTML = this.weapons[2][3];
	document.getElementById("w24").innerHTML = this.weapons[2][4];
	document.getElementById("w25").innerHTML = this.weapons[2][5];
	
	document.getElementById("w30").innerHTML = this.weapons[3][0];
	document.getElementById("w31").innerHTML = this.weapons[3][1];
	document.getElementById("w32").innerHTML = this.weapons[3][2];
	document.getElementById("w33").innerHTML = this.weapons[3][3];
	document.getElementById("w34").innerHTML = this.weapons[3][4];
	document.getElementById("w35").innerHTML = this.weapons[3][5];
	
	document.getElementById("w40").innerHTML = this.weapons[4][0];
	document.getElementById("w41").innerHTML = this.weapons[4][1];
	document.getElementById("w42").innerHTML = this.weapons[4][2];
	document.getElementById("w43").innerHTML = this.weapons[4][3];
	document.getElementById("w44").innerHTML = this.weapons[4][4];
	document.getElementById("w45").innerHTML = this.weapons[4][5];
	
	document.getElementById("w50").innerHTML = this.weapons[5][0];
	document.getElementById("w51").innerHTML = this.weapons[5][1];
	document.getElementById("w52").innerHTML = this.weapons[5][2];
	document.getElementById("w53").innerHTML = this.weapons[5][3];
	document.getElementById("w54").innerHTML = this.weapons[5][4];
	document.getElementById("w55").innerHTML = this.weapons[5][5];
	
	//rooms
	document.getElementById("r00").innerHTML = this.rooms[0][0];
	document.getElementById("r01").innerHTML = this.rooms[0][1];
	document.getElementById("r02").innerHTML = this.rooms[0][2];
	document.getElementById("r03").innerHTML = this.rooms[0][3];
	document.getElementById("r04").innerHTML = this.rooms[0][4];
	document.getElementById("r05").innerHTML = this.rooms[0][5];
	
	document.getElementById("r10").innerHTML = this.rooms[1][0];
	document.getElementById("r11").innerHTML = this.rooms[1][1];
	document.getElementById("r12").innerHTML = this.rooms[1][2];
	document.getElementById("r13").innerHTML = this.rooms[1][3];
	document.getElementById("r14").innerHTML = this.rooms[1][4];
	document.getElementById("r15").innerHTML = this.rooms[1][5];
	
	document.getElementById("r20").innerHTML = this.rooms[2][0];
	document.getElementById("r21").innerHTML = this.rooms[2][1];
	document.getElementById("r22").innerHTML = this.rooms[2][2];
	document.getElementById("r23").innerHTML = this.rooms[2][3];
	document.getElementById("r24").innerHTML = this.rooms[2][4];
	document.getElementById("r25").innerHTML = this.rooms[2][5];
	
	document.getElementById("r30").innerHTML = this.rooms[3][0];
	document.getElementById("r31").innerHTML = this.rooms[3][1];
	document.getElementById("r32").innerHTML = this.rooms[3][2];
	document.getElementById("r33").innerHTML = this.rooms[3][3];
	document.getElementById("r34").innerHTML = this.rooms[3][4];
	document.getElementById("r35").innerHTML = this.rooms[3][5];
	
	document.getElementById("r40").innerHTML = this.rooms[4][0];
	document.getElementById("r41").innerHTML = this.rooms[4][1];
	document.getElementById("r42").innerHTML = this.rooms[4][2];
	document.getElementById("r43").innerHTML = this.rooms[4][3];
	document.getElementById("r44").innerHTML = this.rooms[4][4];
	document.getElementById("r45").innerHTML = this.rooms[4][5];
	
	document.getElementById("r50").innerHTML = this.rooms[5][0];
	document.getElementById("r51").innerHTML = this.rooms[5][1];
	document.getElementById("r52").innerHTML = this.rooms[5][2];
	document.getElementById("r53").innerHTML = this.rooms[5][3];
	document.getElementById("r54").innerHTML = this.rooms[5][4];
	document.getElementById("r55").innerHTML = this.rooms[5][5];
	
	document.getElementById("r60").innerHTML = this.rooms[6][0];
	document.getElementById("r61").innerHTML = this.rooms[6][1];
	document.getElementById("r62").innerHTML = this.rooms[6][2];
	document.getElementById("r63").innerHTML = this.rooms[6][3];
	document.getElementById("r64").innerHTML = this.rooms[6][4];
	document.getElementById("r65").innerHTML = this.rooms[6][5];
	
	document.getElementById("r70").innerHTML = this.rooms[7][0];
	document.getElementById("r71").innerHTML = this.rooms[7][1];
	document.getElementById("r72").innerHTML = this.rooms[7][2];
	document.getElementById("r73").innerHTML = this.rooms[7][3];
	document.getElementById("r74").innerHTML = this.rooms[7][4];
	document.getElementById("r75").innerHTML = this.rooms[7][5];
	
	document.getElementById("r80").innerHTML = this.rooms[8][0];
	document.getElementById("r81").innerHTML = this.rooms[8][1];
	document.getElementById("r82").innerHTML = this.rooms[8][2];
	document.getElementById("r83").innerHTML = this.rooms[8][3];
	document.getElementById("r84").innerHTML = this.rooms[8][4];
	document.getElementById("r85").innerHTML = this.rooms[8][5];
}