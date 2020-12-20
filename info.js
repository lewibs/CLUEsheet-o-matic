import "@babel/register";

//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//INFO OBJECT//	
let info = new Object;
info.move = "no move";
info.answer = "no answer";
info.text = <div>
				<div id="move">SUGGESTED MOVE: {this.move}</div>
				<div id="answer">POSSIBLE ANSWER: {this.answer} {this.likelihood}%</div>
			</div>;
info.update = function() {
	ReactDOM.render(this.text,document.getElementById('info'));
}