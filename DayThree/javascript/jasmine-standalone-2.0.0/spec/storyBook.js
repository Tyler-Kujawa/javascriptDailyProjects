describe('Storybook functionality', function(){
	it('should divide story by word', function(){
		var testStory = "This is a test story. This is the second sentence.";
		var dividedStory = readAlong.divideStory(testStory, 'word');
		expect(dividedStory.length).toBe(10);
	});
	
	it('should divide story by Paragraph', function(){
		var testStory = "This is a test story. This is the second sentence.";
		var dividedStory = readAlong.divideStory(testStory, 'sentence');
		expect(dividedStory.length).toBe(2);
	});
});

