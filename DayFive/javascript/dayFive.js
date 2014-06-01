$(document).ready(function(){
	beginGame();
});

function beginGame(){
	var game = new Game();
	var board = new Board(3, 3, game);
	board.draw();
};

/*
//	Player 1 is always X 
//	Player 2 is O
*/

function Game(){
	this.currentPlayersMove = 0,
	this.winner = null;

	
	var getCurrentPlayersMove = function(){
		return this.currentPlayersMove;
	}
	
	var currentPlayersMoveAsString = function(){
		switch(this.currentPlayersMove){
		case 0:
			return "Player 1";
			break;
		case 1:
			return "Player 2";
			break;
		default:
			return null;
		}
	}
	
	var setCurrentPlayersMove = function(currentPlayer){
		this.currentPlayersMove = currentPlayer;
	};
	
	var advanceMove = function(){
		if(this.currentPlayersMove === 1){
			this.currentPlayersMove = this.currentPlayersMove - 1;
		}else if(this.currentPlayersMove === 0){
			this.currentPlayersMove = this.currentPlayersMove + 1;
		}else{
			console.log("Error advancing to next move...");
		}
	}

	return {
		currentPlayersMoveAsString : currentPlayersMoveAsString,
		advanceMove : advanceMove
	}
}

function Board(rows, cols, game){
	this.rows = rows;
	this.cols = cols;
	this.game = game;
	
	var draw = function(){
		var boardSize = rows * cols;
		var squaresToAdd = "";
		for(var i = 0; i < boardSize; i++){
			squaresToAdd += "<div class='square' id=square" + i + "></div>";
		}
		$('#board').append(squaresToAdd);
		
		for(var x = 0; x < boardSize; x++){
			$('#square' + x).on('click', function(){
				console.log(game.currentPlayersMoveAsString() + " clicked " + this.id );
				game.advanceMove();
			});
		}
	}
	
	return{
		draw : draw
	}
	
}