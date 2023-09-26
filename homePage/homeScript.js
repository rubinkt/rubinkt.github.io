
//DOM element access
const colorButtons = Array.from(document.getElementById('buttons').getElementsByTagName('button'));
const siteNavLinks = Array.from(document.getElementbyClass('sameSiteLink'));
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

siteNavLinks.forEach(link => {
    if (link.id != 'current') {
        link.addEventListener('click', siteNavClick);
    }
});