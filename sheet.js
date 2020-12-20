import "@babel/register";

//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//SHEET OBJECT//
let sheet = new Object;
sheet.suspects = makeArray(6,6);
sheet.wepons = makeArray(6,6);
sheet.rooms = makeArray(9,6);
sheet.players = makeArray(6,1);
sheet.getPlayers = function() {
	this.players[0] = document.getElementById("p1").value;
	this.players[1] = document.getElementById("p2").value;
	this.players[2] = document.getElementById("p3").value;
	this.players[3] = document.getElementById("p4").value;
	this.players[4] = document.getElementById("p5").value;
	this.players[5] = document.getElementById("p6").value;
}
sheet.clearBlankPlayers = function() {
	for (let i = 0 ; i < this.players.length ; i++) {
		if( this.players[i] == null ) {
			sheet.suspects[i].fill(noCard);
			sheet.wepons[i].fill(noCard);
			sheet.rooms[i].fill(noCard);
		}
	}
}
sheet.text = <div>
				<div style={{"text-align":"center"}}>
					<table style={{width:"100%"}}>
						<tr style={{"font-weigh":"bold"}}>
							<td style={{"text-align":"right"}}>Players:</td>
							<td style={{"background-color":"#ff9999"}}>1.{this.players[0]}</td>
							<td style={{"background-color":"#ffdb4d"}}>2.{this.players[1]}</td>
							<td style={{"background-color":"#ffffff"}}>3.{this.players[2]}</td>
							<td style={{"background-color":"#66ff66"}}>4.{this.players[3]}</td>
							<td style={{"background-color":"#6699ff"}}>5.{this.players[4]}</td>
							<td style={{"background-color":"#d966ff"}}>6.{this.players[5]}</td>
						</tr>
						
						<th colspan="7">SUSPECTS</th>
	
						<tr>
							<td>Miss Scarlet (ms)</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[0][0]}</td>
							<td>{suspects[0][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[0][2]}</td>
							<td>{suspects[0][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[0][4]}</td>
							<td>{suspects[0][5]}</td>
						</tr>
						<tr>
							<td>Col. Mustard (cm)</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[1][0]}</td>
							<td>{suspects[1][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[1][2]}</td>
							<td>{suspects[1][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[1][4]}</td>
							<td>{suspects[1][5]}</td>
						</tr>
						<tr>
							<td>Mrs. White (mw)</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[2][0]}</td>
							<td>{suspects[2][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[2][2]}</td>
							<td>{suspects[2][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[2][4]}</td>
							<td>{suspects[2][5]}</td>
						</tr>
						<tr>
							<td>Mr. Green (mg)</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[3][0]}</td>
							<td>{suspects[3][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[3][2]}</td>
							<td>{suspects[3][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[3][4]}</td>
							<td>{suspects[3][5]}</td>
						</tr>
						<tr>
							<td>Mrs. Peacock (mp)</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[4][0]}</td>
							<td>{suspects[4][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[4][2]}</td>
							<td>{suspects[4][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[4][4]}</td>
							<td>{suspects[4][5]}</td>
						</tr>
						<tr>
							<td>Prof. Plum (pp)</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[5][0]}</td>
							<td>{suspects[5][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[5][2]}</td>
							<td>{suspects[5][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{suspects[5][4]}</td>
							<td>{suspects[5][5]}</td>
						</tr>
						
						<th colspan="7">WEAPONS</th>

						<tr>
							<td>Candle stick (cs)</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[0][0]}</td>
							<td>{weapons[0][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[0][2]}</td>
							<td>{weapons[0][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[0][4]}</td>
							<td>{weapons[0][5]}</td>
						</tr>
						
						<tr>
							<td>Knife (kn)</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[1][0]}</td>
							<td>{weapons[1][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[1][2]}</td>
							<td>{weapons[1][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[1][4]}</td>
							<td>{weapons[1][5]}</td>
						</tr>
						
						<tr>
							<td>Rope (ro)</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[2][0]}</td>
							<td>{weapons[2][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[2][2]}</td>
							<td>{weapons[2][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[2][4]}</td>
							<td>{weapons[2][5]}</td>
						</tr>
						
						<tr>
							<td>Revolver (re)</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[3][0]}</td>
							<td>{weapons[3][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[3][2]}</td>
							<td>{weapons[3][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[3][4]}</td>
							<td>{weapons[3][5]}</td>
						</tr>
						
						<tr>
							<td>Lead Pipe (lp)</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[4][0]}</td>
							<td>{weapons[4][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[4][2]}</td>
							<td>{weapons[4][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[4][4]}</td>
							<td>{weapons[4][5]}</td>
						</tr>
						
						<tr>
							<td>Wrench (wr)</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[5][0]}</td>
							<td>{weapons[5][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[5][2]}</td>
							<td>{weapons[5][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{weapons[5][4]}</td>
							<td>{weapons[5][5]}</td>
						</tr>
						
						<th colspan="7">this.roomsS</th>

						<tr>
							<td>Ball Room (ba)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[0][0]}</td>
							<td>{this.rooms[0][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[0][2]}</td>
							<td>{this.rooms[0][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[0][4]}</td>
							<td>{this.rooms[0][5]}</td>
						</tr>
						
						<tr>
							<td>Billiard Room (bi)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[1][0]}</td>
							<td>{this.rooms[1][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[1][2]}</td>
							<td>{this.rooms[1][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[1][4]}</td>
							<td>{this.rooms[1][5]}</td>
						</tr>
						
						<tr>
							<td>Conservatory (co)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[2][0]}</td>
							<td>{this.rooms[2][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[2][2]}</td>
							<td>{this.rooms[2][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[2][4]}</td>
							<td>{this.rooms[2][5]}</td>
						</tr>
						
						<tr>
							<td>Dining Room (di)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[3][0]}</td>
							<td>{this.rooms[3][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[3][2]}</td>
							<td>{this.rooms[3][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[3][4]}</td>
							<td>{this.rooms[3][5]}</td>
						</tr>
						
						<tr>
							<td>Hall (ha)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[4][0]}</td>
							<td>{this.rooms[4][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[4][2]}</td>
							<td>{this.rooms[4][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[4][4]}</td>
							<td>{this.rooms[4][5]}</td>
						</tr>
						
						<tr>
							<td>Kitchen (ki)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[5][0]}</td>
							<td>{this.rooms[5][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[5][2]}</td>
							<td>{this.rooms[5][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[5][4]}</td>
							<td>{this.rooms[5][5]}</td>
						</tr>
						
						<tr>
							<td>Library (li)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[6][0]}</td>
							<td>{this.rooms[6][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[6][2]}</td>
							<td>{this.rooms[6][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[6][4]}</td>
							<td>{this.rooms[6][5]}</td>
						</tr>
						
						<tr>
							<td>Lounge (lo)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[7][0]}</td>
							<td>{this.rooms[7][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[7][2]}</td>
							<td>{this.rooms[7][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[7][4]}</td>
							<td>{this.rooms[7][5]}</td>
						</tr>
						
						<tr>
							<td>Study (st)</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[8][0]}</td>
							<td>{this.rooms[8][1]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[8][2]}</td>
							<td>{this.rooms[8][3]}</td>
							<td style={{"background-color":"#e6e6e6"}}>{this.rooms[8][4]}</td>
							<td>{this.rooms[8][5]}</td>
						</tr>
					</table>
				</div>
			</div>;
			
sheet.update = function() {
	ReactDOM.render(this.text,document.getElementById('table'));
}