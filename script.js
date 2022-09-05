//run the navbar function when the page is completely load
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ()=>{ready(); })
} else {
	ready()
}

//setup page functionalities
function ready() {

}

// scrolling and changing the color
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#E1E441';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        // green
        body.style.backgroundColor = '#E1E441';
    } else if (scroll >= 300 && scroll < 600) {
        // yellow
        body.style.backgroundColor = '#0D6F62';
    } else if (scroll >= 600 && scroll < 1200) {
        // blue
        body.style.backgroundColor = '#0D6F62';
    } else if (scroll >= 1200 && scroll < 1800) {
        // orange
        body.style.backgroundColor = '#0D6F62';
    } else if (scroll >= 1800 && scroll < 3000) {
        // red
        body.style.backgroundColor = '#E1E441';
    } else {
        // purple
        body.style.backgroundColor = '#0D6F62';
    }