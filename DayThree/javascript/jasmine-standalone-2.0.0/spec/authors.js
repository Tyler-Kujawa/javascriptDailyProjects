describe('Author Selection', function(){
	it('Returns the correct authors info.', function(){
		var authorName = "Chekov";
		var selectedAuthor = readAlong.selectAuthor(authorName);
		expect(selectedAuthor.lastName).toBe(authorName);
	});
	
	it('Returns stories for a given author.', function(){
		var authorName = "Chekov";
		var stories = [];
		var selectedAuthor = readAlong.selectAuthor(authorName);
		stories = selectedAuthor.getStories();
		console.log(stories);
		expect(stories.length).toBeGreaterThan(0);
	});
});

