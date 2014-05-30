$('document').ready(function(){
	runAuthorSelect();
});

function runAuthorSelect(){
	var authors = readAlong.getAuthors(),
		authorSelection = "";
		
	_.each(authors, function(author){
		authorSelection += "<div class='col-md-4'><div class='author-card'>";
		authorSelection += "<h3 class='text-center'><a href='#' id='"+ author.lastName.toLowerCase() +"Link'>" + author.lastName + "</a></h3>";
		authorSelection += "<div class='image-holder'><img src='images/" + author.lastName.toLowerCase() + ".jpg' /></div>";
		authorSelection += "</div></div>"
	});
	
	$('#authors-container').append(authorSelection);
	
		_.each(authors, function(author){
		$("#" +author.lastName.toLowerCase() + "Link").on('click', function(){
			prepareStory(author);
		})
	});	
};

function prepareStory(author){
	var story = author.getStories()[0].text;
	
	replaceBody('<div id="storyBook" class="container"><div class="main-content"><div class="row"><div class="col-md-12"><div id="speedSelector"></div></div></div><div class="row"><div class="col-md-12"><div id="divideSelector"></div></div></div></div></div>');
	replaceHeader(story, author);
	addSpeedSelector();
	addDivideSelector();
	addStories(story);
	var readingSpeed = $('#readingSpeed').val();
	var divideBy = $('#divideBy').val();
	
	$('#speedSelector').on('change', function(){
		startReading(story, readingSpeed, divideBy);
	});
	$('#divideSelector').on('change', function(){
		startReading(story, readingSpeed, divideBy);
	});
};


function replaceBody(content){
	$('.main-content').replaceWith(content);
};

function replaceHeader(story, author){
	$('.header').replaceWith('<div class="header"><h1 class="text-center">' + story.title + ' - ' +  author.lastName + '</h1></div>');
};

function addStories(story){
	if(Object.prototype.toString.call( story ) === '[object Array]'){
		var content = '<p>';
		_.each(story, function(chunk, index){
			content += '<span id="chunk' + index + '">' + chunk + ' </span>';
		});
		$('#storyBook').append(content + '</p>');
	}else{
		$('#storyBook').append('<p class="page">' + story + '</p>');
	}
};

function addSpeedSelector(){
	var speedSelector = $('#speedSelector')
	speedSelector.append('ReadingSpeed: <select id="readingSpeed"><option selected value="50">50 WPM</option><option value="100">100 WPM</option></select>');
	
};
function addDivideSelector(){
	var divideSelector = $('#divideSelector')
	divideSelector.append('Divide By: <select id="divideBy"><option selected value="word">Words</option><option value="sentence">Sentence</option></select>');
};

function startReading(text, readingSpeed, divideBy){
	var dividedStory = readAlong.divideStory(text, divideBy);
	replaceBody('<div id="storyBook" class="main-content"></div>');
	addStories(dividedStory); 
	
};

