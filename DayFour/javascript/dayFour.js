$('document').ready(function(){
	enableClickCanvas();
});

function enableClickCanvas(){
	$('#click-canvas').on('click', function(event){
		var newCircle = $('<div></div>');
		
		console.log(newCircle);
		newCircle.addClass('click-circle');
		console.log(newCircle.style);
		newCircle.css('left', event.clientX);
		newCircle.css('top', event.clientY);
		
		$(this).append(newCircle);
		
		console.log(event);
	});
};