$(document).ready(function(){
	populateDotBoard(1000);
});

function populateDotBoard(size){
	var dotsOnTheBoard = _.range(size);
	
	_.each(dotsOnTheBoard, function(position){
		$('<div>', {
			id: 'dot' + position,
			class: 'dot'
		}).on('click', function(event){
			$(this).off('click');
			startWave(event, position);
		})	.appendTo("#dotBoard");
	})
}


function startWave(event, position){
	var selectedDotId = position;
	
	doTheWave(selectedDotId);
	
	setTimeout(function(){
		$('#dot' + (selectedDotId + 1)).trigger('click');
		$('#dot' + (selectedDotId - 1)).trigger('click');
		$('#dot' + (selectedDotId + 40)).trigger('click');
		$('#dot' + (selectedDotId - 40)).trigger('click');
	}, 150);
	
	setTimeout(function(){
		$('#dot' + selectedDotId).on('click', function(event){
			$(this).off('click'); 
			startWave(event, position);
		});
	}, 800);
};
function doTheWave(dotId){
	$('#dot' + dotId).addClass('wave');
	
	setTimeout(function(){
			$('#dot' + dotId).removeClass('wave');
	}, 500);
};