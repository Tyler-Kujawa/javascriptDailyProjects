describe('My dot-board', function(){
	it('should contain 1000 dots', function(){
		var SIZE = 1000;
		
		populateDotBoard(SIZE);
		var dotBoard = $('#dotBoard')
		console.log(dotBoard);
	});
});