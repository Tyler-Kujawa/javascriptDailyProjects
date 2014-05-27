/*
	============================================
		function Flashing Hello World
	============================================
*/

window.onload = flashGreeting;

function flash(elem){
	if(elem.style.color == "orange"){
		elem.style.color = "white";
	}else{
		elem.style.color = "orange";
	}
	
	setTimeout(function(){
		flash(elem);
	}, 500);
}

function flashGreeting(){
	var greeting = document.getElementById('greeting');
	greeting.style.color = "orange";
	setTimeout(function(){
		flash(greeting);
	}, 500);
}
/*
	============================================
		functions for raining words animation
	============================================

*/
function makePElem(word){
	var pElem = document.createElement('p');
	pElem.innerText = word;
	pElem.style.position = "absolute";
	pElem.style.top = 25;
	pElem.style.color = "blue";
	pElem.style.left = Math.floor(Math.random() * 1100);
	return pElem;
}

function moveDown(elem, speed){
	elem.style.top = parseInt(elem.style.top) + 1 + 'px';
	if(parseInt(elem.style.top) < 500){
		setTimeout(function(){
			moveDown(elem, speed);
		}, speed);
	}else{
		//Once animation is complete remove elem from page;
		var parent = elem.parentNode;
		parent.removeChild(elem);
	}
}

function makeItRainAWord(word){
	if(word && word.length > 0){
		var elem = makePElem(word);
		var documentBody = document.getElementsByClassName('row')[0].parentNode;
		var wordElem = documentBody.appendChild(elem);
		setTimeout(function(){
			moveDown(wordElem);
			}, 25);
	}else{
		alert("Please enter some text.");
	}
}

function somethingSaid(input){
	var word = input.value;
	makeItRainAWord(word);
}

/*
	============================================
		functions for raining writer images
	============================================

*/

window.onLoad = rainWriters();

function rainWriters(){
	setTimeout(function(){
		var writerElem = createWriterElem();
		moveDown(writerElem, Math.floor(Math.Random * 1000) + 20);
		rainWriters();
	}, Math.floor(Math.random() * 1000) + 500);
}

function createWriterElem(){
	var writerImage = document.createElement('img');
	writerImage.src = "images/" + (Math.floor(Math.random() * 5) + 1) + ".jpg"; //TODO: use random number to get pictures
	writerImage.style.position = 'absolute';
	writerImage.style.top = 100;
	writerImage.style.height = (Math.floor(Math.random() * 120) + 20);
	writerImage.style.zIndex = '-1';
	writerImage.style.left = Math.floor(Math.random() * 1100);
	
	var documentBody = document.getElementsByClassName('container')[0].parentNode;
	var writerElem = documentBody.appendChild(writerImage);
	return writerElem;
}






