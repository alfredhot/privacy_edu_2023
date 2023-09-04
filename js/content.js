//inject
function injectCustomJs() {

    const jsPath = 'js/inject.js';
    const temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL(jsPath);
    temp.onload = function () {
        // remove the temp script tag after loaded
        this.parentNode.removeChild(this);
    }
    document.head.appendChild(temp);
    console.log("injected!");
}
document.addEventListener('DOMContentLoaded', function () {
    injectCustomJs();
});

