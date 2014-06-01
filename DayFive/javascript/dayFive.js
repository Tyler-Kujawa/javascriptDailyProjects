$(document).ready(function(){
	beginGame();
});

function beginGame(){
	var currentGame = new Game();
	var board = new Board(3, 3, currentGame);
	board.draw();
};

/*
//	Player 1 is always X 
//	Player 2 is O
*/

function Game(){
	this.currentPlayersMove = 0,
	this.winner = null;
	
	this.getCurrentPlayerMove = function(){ return this.currentPlayersMove; }
	
	this.getCurrentPlayerMoveAsString = function(){
		if(this.currentPlayersMove === 0){
			return "Player 1";
		}else if(this.currentPlayersMove === 1){
			return "Player 2";
		}else{
			console.log('Error determing which players turn it is.');
			return null;
		}
	}
	
	this.advanceTurn = function(){
		if(this.currentPlayersMove === 0){
			this.currentPlayersMove += 1;
		}else if(this.currentPlayersMove === 1){
			this.currentPlayersMove -= 1;
		}else{
			console.log('There was a problem advancing the game.');
		}
	}
}
	

function Board(rows, cols, currentGame){
	this.rows = rows;
	this.cols = cols;
	
	this.draw = function(){
		var boardSize = rows * cols;
		var squaresToAdd = "";
		for(var i = 0; i < boardSize; i++){
			squaresToAdd += "<div class='square' id=square" + i + "></div>";
		}
		$('#board').append(squaresToAdd);
		
		for(var x = 0; x < boardSize; x++){
			$('#square' + x).on('click', function(){
				console.log(currentGame.getCurrentPlayerMoveAsString());
				currentGame.advanceTurn();
			});
		}
	}
	
}