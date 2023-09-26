
//DOM element access
const colorButtons = Array.from(document.getElementById('buttons').getElementsByTagName('button'));
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
    console.log(event.target.id);
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

colorButtons.forEach(butt => {
    butt.addEventListener('click', buttonClick);
});