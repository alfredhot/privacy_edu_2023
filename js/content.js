//inject
function injectCustomJs() {

    const jsPath = 'js/inject.js';
    let currentPage = 0

    const contentsFrame = window.frames['contentsFrame']
    contentsFrame.onload = function () {
        console.log("iframe loaded")
        currentPage = document.getElementById('lastStudyContentsPath2').value
        chrome.storage.local.set({ currentPage: currentPage }, function () {
            console.log('iframe loaded, currentPage setting finish:', currentPage)

        });

        const temp = document.createElement('script');
        temp.setAttribute('type', 'text/javascript');
        temp.src = chrome.runtime.getURL(jsPath);
        contentsFrame.document.body.appendChild(temp);

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('onclick', 'goClick()');
        button.innerHTML = 'next';
        contentsFrame.document.body.prepend(button);

        const buttonRun = document.createElement('button');
        buttonRun.setAttribute('type', 'button');
        buttonRun.setAttribute('onclick', 'runClick()');
        buttonRun.innerHTML = 'auto run';
        contentsFrame.document.body.prepend(buttonRun);

        const buttonInit = document.createElement('button');
        buttonInit.setAttribute('type', 'button');
        buttonInit.setAttribute('onclick', 'initCurrentPage()');
        buttonInit.innerHTML = 'init';
        contentsFrame.document.body.prepend(buttonInit);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    injectCustomJs();
});

