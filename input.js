import "@babel/register";

//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//INPUT OBJECT//
let input = new Object;
input.text = 	<div>
					<input type="text" name="name" id="cards" placeholder="enter move" />
					<button onClick={update}>Update</button>
				</div>;
input.update = function() {
	ReactDOM.render(this.text,document.getElementById('input'));
}