var readAlong = (function(){
	this.stories = ['In the year in which my story begins I had a job at a little station on one of our southwestern railways. Whether I had a gay or a dull life at the station you can judge from the fact that for fifteen miles round there was not one human habitation, not one woman, not one decent tavern; and in those days I was young, strong, hot-headed, giddy, and foolish. The only distraction I could possibly find was in the windows of the passenger trains, and in the vile vodka which the Jews drugged with thorn-apple. Sometimes there would be a glimpse of a woman\'s head at a carriage window, and one would stand like a statue without breathing and stare at it until the train turned into an almost invisible speck; or one would drink all one could of the loathsome vodka till one was stupefied and did not feel the passing of the long hours and days. Upon me, a native of the north, the steppe produced the effect of a deserted Tatar cemetery. In the summer the steppe with its solemn calm, the monotonous chur of the grasshoppers, the transparent moonlight from which one could not hide, reduced me to listless melancholy; and in the winter the irreproachable whiteness of the steppe, its cold distance, long nights, and howling wolves oppressed me like a heavy nightmare. There were several people living at the station: my wife and I, a deaf and scrofulous telegraph clerk, and three watchmen. My assistant, a young man who was in consumption, used to go for treatment to the town, where he stayed for months at a time, leaving his duties to me together with the right of pocketing his salary. I had no children, no cake would have tempted visitors to come and see me, and I could only visit other officials on the line, and that no oftener than once a month. I remember my wife and I saw the New Year in. We sat at table, chewed lazily, and heard the deaf telegraph clerk monotonously tapping on his apparatus in the next room. I had already drunk five glasses of drugged vodka, and, propping my heavy head on my fist, thought of my overpowering boredom from which there was no escape, while my wife sat beside me and did not take her eyes off me. She looked at me as no one can look but a woman who has nothing in this world but a handsome husband. She loved me madly, slavishly, and not merely my good looks, or my soul, but my sins, my ill-humor and boredom, and even my cruelty when, in drunken fury, not knowing how to vent my ill-humor, I tormented her with reproaches. In spite of the boredom which was consuming me, we were preparing to see the New Year in with exceptional festiveness, and were awaiting midnight with some impatience. The fact is, we had in reserve two bottles of champagne, the real thing, with the label of Veuve Clicquot; this treasure I had won the previous autumn in a bet with the station-master of D. when I was drinking with him at a christening. It sometimes happens during a lesson in mathematics, when the very air is still with boredom, a butterfly flutters into the class-room; the boys toss their heads and begin watching its flight with interest, as though they saw before them not a butterfly but something new and strange; in the same way ordinary champagne, chancing to come into our dreary station, roused us. We sat in silence looking alternately at the clock and at the bottles. When the hands pointed to five minutes to twelve I slowly began uncorking a bottle. I don\'t know whether I was affected by the vodka, or whether the bottle was wet, but all I remember is that when the cork flew up to the ceiling with a bang, my bottle slipped out of my hands and fell on the floor. Not more than a glass of the wine was spilt, as I managed to catch the bottle and put my thumb over the foaming neck."Well, may the New Year bring you happiness!" I said, filling two glasses. "Drink!"My wife took her glass and fixed her frightened eyes on me. Her face was pale and wore a look of horror. "Did you drop the bottle?" she asked. "Yes. But what of that?" "It\'s unlucky," she said, putting down her glass and turning paler still. "It\'s a bad omen. It means that some misfortune will happen to us this year." "What a silly thing you are," I sighed. "You are a clever woman, and yet you talk as much nonsense as an old nurse. Drink." "God grant it is nonsense, but... something is sure to happen! You\'ll see." She did not even sip her glass, she moved away and sank into thought. I uttered a few stale commonplaces about superstition, drank half a bottle, paced up and down, and then went out of the room. Outside there was the still frosty night in all its cold, inhospitable beauty. The moon and two white fluffy clouds beside it hung just over the station, motionless as though glued to the spot, and looked as though waiting for something. A faint transparent light came from them and touched the white earth softly, as though afraid of wounding her modesty, and lighted up everything -- the snowdrifts, the embankment.... It was still. I walked along the railway embankment. "Silly woman," I thought, looking at the sky spangled with brilliant stars. "Even if one admits that omens sometimes tell the truth, what evil can happen to us? The misfortunes we have endured already, and which are facing us now, are so great that it is difficult to imagine anything worse. What further harm can you do a fish which has been caught and fried and served up with sauce? " A poplar covered with hoar frost looked in the bluish darkness like a giant wrapt in a shroud. It looked at me sullenly and dejectedly, as though like me it realized its loneliness. I stood a long while looking at it. "My youth is thrown away for nothing, like a useless cigarette end," I went on musing. "My parents died when I was a little child; I was expelled from the high school, I was born of a noble family, but I have received neither education nor breeding, and I have no more knowledge than the humblest mechanic. I have no refuge, no relations, no friends, no work I like. I am not fitted for anything, and in the prime of my powers I am good for nothing but to be stuffed into this little station; I have known nothing but trouble and failure all my life. What can happen worse?"'
	];
	
	
	this.authors = [
		{
			firstName: 'Anton',
			lastName : 'Chekov',
			storyIds : [0],
			getStories : function(){
				var results = [];
				_.each(this.storyIds, function(index){ results.push(stories[index]); })
				return results;
				}
			},
			{
			firstName: 'Jonathan',
			lastName : 'Lethem',
			storyIds : [1],
			getStories : getStories
			},
			{
			firstName: 'Don',
			lastName : 'Delillo',
			storyIds : [2],
			getStories : function(){
				var results = [];
				_.each(this.storyIds, function(index){ results.push(stories[index]); })
				return results;
			}
		}
	];
	
	function getAuthors(){
		return authors;
	};
	
	function getStories(){
		var results = [];
		_.each(this.storyIds, function(index){ results.push(stories[index]); })
		return results;
	}
	
	function selectAuthor(lastName){	
		var result = _.find(authors, function(author) { return author.lastName == lastName } );
		return result
	};
	
		function divideStory(text, divideBy){
		switch(divideBy){
			case 'word':
				return text.split(' ');
				break;
			case 'sentence':
				return text.split('. ');
				break;
		}
	};
	
	//	Public
	return {
		getAuthors : getAuthors,
		selectAuthor : selectAuthor,
		divideStory : divideStory
	}
})();