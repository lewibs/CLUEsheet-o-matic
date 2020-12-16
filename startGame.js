function startGame(){
	let suspect = makeArray(6,6);
	let weapon = makeArray(6,6);
	let room = makeArray(8,6);
	let player = makeArray(6,1);

	
	let table = <div>
					<div style={{"text-align":"center"}}>
						<table style={{width:"100%"}}>
							<tr style={{"font-weigh":"bold"}}>
								<td style={{"text-align":"right"}}>Players:</td>
								<td style={{"background-color":"#ff9999"}}>1.{player[1]}</td>
								<td style={{"background-color":"#ffdb4d"}}>2.{player[2]}</td>
								<td style={{"background-color":"#ffffff"}}>3.{player[3]}</td>
								<td style={{"background-color":"#66ff66"}}>4.{player[4]}</td>
								<td style={{"background-color":"#6699ff"}}>5.{player[5]}</td>
								<td style={{"background-color":"#d966ff"}}>6.{player[6]}</td>
							</tr>
							
							<th colspan="7">SUSPECTS</th>
		
							<tr>
								<td>Miss Scarlet (ms)</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[0][0]}</td>
								<td>{suspect[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[0][2]}</td>
								<td>{suspect[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[0][4]}</td>
								<td>{suspect[0][5]}</td>
							</tr>
							<tr>
								<td>Col. Mustard (cm)</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[1][0]}</td>
								<td>{suspect[1][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[1][2]}</td>
								<td>{suspect[1][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[1][4]}</td>
								<td>{suspect[1][5]}</td>
							</tr>
							<tr>
								<td>Mrs. White (mw)</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[2][0]}</td>
								<td>{suspect[2][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[2][2]}</td>
								<td>{suspect[2][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[2][4]}</td>
								<td>{suspect[2][5]}</td>
							</tr>
							<tr>
								<td>Mr. Green (mg)</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[3][0]}</td>
								<td>{suspect[3][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[3][2]}</td>
								<td>{suspect[3][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[3][4]}</td>
								<td>{suspect[3][5]}</td>
							</tr>
							<tr>
								<td>Mrs. Peacock (mp)</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[4][0]}</td>
								<td>{suspect[4][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[4][2]}</td>
								<td>{suspect[4][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[4][4]}</td>
								<td>{suspect[4][5]}</td>
							</tr>
							<tr>
								<td>Prof. Plum (pp)</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[5][0]}</td>
								<td>{suspect[5][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[5][2]}</td>
								<td>{suspect[5][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{suspect[5][4]}</td>
								<td>{suspect[5][5]}</td>
							</tr>
							
							<th colspan="7">WEAPONS</th>

							<tr>
								<td>Candle stick (cs)</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][0]}</td>
								<td>{weapon[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][2]}</td>
								<td>{weapon[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][4]}</td>
								<td>{weapon[0][5]}</td>
							</tr>
							
							<tr>
								<td>Knife (kn)</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][0]}</td>
								<td>{weapon[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][2]}</td>
								<td>{weapon[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][4]}</td>
								<td>{weapon[0][5]}</td>
							</tr>
							
							<tr>
								<td>Rope (ro)</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][0]}</td>
								<td>{weapon[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][2]}</td>
								<td>{weapon[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][4]}</td>
								<td>{weapon[0][5]}</td>
							</tr>
							
							<tr>
								<td>Revolver (re)</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][0]}</td>
								<td>{weapon[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][2]}</td>
								<td>{weapon[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][4]}</td>
								<td>{weapon[0][5]}</td>
							</tr>
							
							<tr>
								<td>Lead Pipe (lp)</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][0]}</td>
								<td>{weapon[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][2]}</td>
								<td>{weapon[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][4]}</td>
								<td>{weapon[0][5]}</td>
							</tr>
							
							<tr>
								<td>Wrench (wr)</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][0]}</td>
								<td>{weapon[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][2]}</td>
								<td>{weapon[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{weapon[0][4]}</td>
								<td>{weapon[0][5]}</td>
							</tr>
							
							<th colspan="7">ROOMS</th>

							<tr>
								<td>Ball Room (ba)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
							
							<tr>
								<td>Billiard Room (bi)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
							
							<tr>
								<td>Conservatory (co)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
							
							<tr>
								<td>Dining Room (di)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
							
							<tr>
								<td>Hall (ha)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
							
							<tr>
								<td>Kitchen (ki)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
							
							<tr>
								<td>Library (li)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
							
							<tr>
								<td>Study (st)</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][0]}</td>
								<td>{room[0][1]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][2]}</td>
								<td>{room[0][3]}</td>
								<td style={{"background-color":"#e6e6e6"}}>{room[0][4]}</td>
								<td>{room[0][5]}</td>
							</tr>
						</table>
					</div>
				</div>;
					
					
			
	ReactDOM.render(table,document.getElementById('root'));
}