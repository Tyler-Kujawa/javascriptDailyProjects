$('document').ready(function(){
	runAuthorSelect();
});


function runAuthorSelect(){
	var authors = readAlong.getAuthors();
	_.each(authors, function(author){
		$('#authorSelect').after('<div class="col-md-4"><div class="author-card "><h3 class="text-center">' + author.lastName + '</h3></div></div>');
	});
};


