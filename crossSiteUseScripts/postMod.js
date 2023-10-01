Post('testing one', 'testing description', 'testing body of text number one ...........', true),
Post('testing two', 'testing description 1', 'testing body of the text number two ///////////', false)
allPosts.forEach(p => {
    for (let i = 0; i < 5; i++) {
        p.addCommentKeith('spam SPAM spam', 'spammity spam spam spam');
    }
});