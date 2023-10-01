//DOM Element Access
const templateElement = document.getElementById('templateHB');
const templateDestination = document.getElementById('posts');

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