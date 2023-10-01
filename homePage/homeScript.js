
//DOM element access
const colorButtons = Array.from(document.getElementById('buttons').getElementsByTagName('button'));
const siteNavLinks = Array.from(document.getElementsByClassName('sameSiteLink'));
const templateElement = document.getElementById('templateHB');
const templateDestination = document.getElementById('highlights');
const bod = document.body;

function goRed() {
    bod.style.background = 'red';
}
function goBlue() {
    bod.style.background = 'blue';
}
function goGreen() {
    bod.style.background = 'green';
}

function buttonClick(event) {
    const targetId = event.target.id;
    switch (targetId) {
        case 'red':
            goRed();
            break;
        case 'blue':
            goBlue();
            break;
        case 'green':
            goGreen();
    }
};

function siteNavClick(event) {
    alert('page in development');
}

colorButtons.forEach(butto => {
    butto.addEventListener('click', buttonClick);
});

/*siteNavLinks.forEach(link => {
    if (link.id != 'current') {
        link.addEventListener('click', siteNavClick);
    }
});
*/





//all posts; i want to figure out how to get this from other file
/*allPosts = [
    Post('testing one', 'testing desc 1', 'testing body of text number one ...........', true),
    Post('testing two', 'testing desc 2', 'testing body of the text number two ///////////', false)
];*/

const context = {
    posts: allPosts.map(p => p.getPost())
};

const template = Handlebars.compile(templateElement.innerHTML);
const compiledHTML = template(context);

templateDestination.innerHTML = compiledHTML;