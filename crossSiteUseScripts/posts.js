/**
 * Keith Rubin
 * ---> Insert Liscense <---
 */

allPosts = [

];

//this is a factory function
//a call will return an object
//that object is a collection of methods
//one of these methods is getPost which returns the public values
const Post = (givenTitle, givenDesc, givenText, givenHL) => {
    //values definitions
    let title = 'Default Title';
    let desc = 'Default Description';
    let text = '';
    let hl = false;
    const comments = [];
    let commentsNo = 0;

    //setters
    const setTitle = titleToCheck => {
        if (typeof titleToCheck === 'string') {
            title = titleToCheck;
        } else if (titleToCheck === null) {
            console.log('error: title is null');
        } else {
            console.log('error: title is not string');
        }
    };
    const setDesc = descToCheck => {
        if (typeof descToCheck === 'string') {
            desc = descToCheck;
        } else if (descToCheck === null) {
            console.log('error: description is null');
        } else {
            console.log('error: description is not string');
        }
    };
    const setText = textToCheck => {
        if (typeof textToCheck === 'string') {
            text = textToCheck;
        } else if (textToCheck === null) {
            console.log('error: text is null');
        } else {
            console.log('error: text is not string');
            console.log(typeof textToCheck);
        }
    };
    const setHL = hlToCheck => {
        if (typeof hlToCheck === 'boolean') {
            hl = hlToCheck;
        } else if (hlToCheck === null) {
            console.log('error: highlighted is null');
        } else {
            console.log('error: highlighted is not boolean');
            console.log(hlToCheck)
        }
    };

    //deploy setters
    setTitle(givenTitle);
    setDesc(givenDesc);
    setText(givenText);
    setHL(givenHL);

    //comment stuff
    const addCommentKeith = (comTitle, comText) => {
        const theComment = Comment(comTitle, comText);
        comments.push(theComment);
        commentsNo++;
        return theComment.getComment.id;
    };
    const removeComment = (comID) => {
        specifiedCommentIndex = comments.findIndex(com => {
            return com.getComment.id === comID;
        });
        comments.splice(specifiedCommentIndex, 1);
        commentsNo--;
    };

    //getter
    const getPost = () => {
        return { title, desc, text, hl, comments, commentsNo };
    };

    //assemble post object
    const thisPost = { setTitle, setDesc, setText, setHL, getPost, addCommentKeith, removeComment };

    //add post to data
    allPosts.push(thisPost);

    //will the site user be able to call all of these methods from the command line?
    //I don't want them too
    //also should I remove this and only push to array?
    return thisPost;
};

/*
allPosts.push(Post('testing one', 'testing description', 'testing body of text number one ...........', true));
allPosts.push(Post('testing two', 'testing description 1', 'testing body of the text number two ///////////', false));
*/

/*const postFromInputString = inputStr => {

};*/



Post('testing one', 'testing description', 'testing body of text number one ...........', true),
Post('testing two', 'testing description 1', 'testing body of the text number two ///////////', false)
allPosts.forEach(p => {
    for (let i = 0; i < 5; i++) {
        p.addCommentKeith('spam SPAM spam', 'spammity spam spam spam');
    }
});