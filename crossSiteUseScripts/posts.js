/**
 * Keith Rubin
 * ---> Insert Liscense <---
 */



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
        }
    };
    const setHL = hlToCheck => {
        if (typeof hlToCheck === 'boolean') {
            hl = hlToCheck;
        } else if (hlToCheck === null) {
            console.log('error: highlighted is null');
        } else {
            console.log('error: highlighted is not boolean');
        }
    };

    //deploy setters
    setTitle(givenTitle);
    setDesc(givenDesc);
    setText(givenText);
    setHL(givenHL);

    //comment stuff
    const addCommentKeith = (comTitle, comText) => {
        
    };
    const removeComment = (comID) => {

    };

    //getter
    const getPost = () => {
        return { title, desc, text, hl, comments };
    };

    //will the site user be able to call all of these methods from the command line?
    //I don't want them too
    return { setTitle, setDesc, setText, setHL, getPost, addCommentKeith, removeComment};
};

const postFromInputString = inputStr => {

}

const allPosts