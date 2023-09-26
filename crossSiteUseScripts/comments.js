/**
 * Keith Rubin
 * ---> Insert Liscense <---
 */



//this is a factory function
//a call will return an object
//that object is a collection of methods
//one of these methods is getComment which returns the public values
const Comment = (givenTitle, givenText) => {
    //values definitions
    let title = 'Default Title';
    let text = 'Keith Rubin is so smart.';

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
    const setText = textToCheck => {
        if (typeof textToCheck === 'string') {
            text = textToCheck;
        } else if (textToCheck === null) {
            console.log('error: text is null');
        } else {
            console.log('error: text is not string');
        }
    };

    //deploy setters
    setTitle(given)


};