//inject
function injectCustomJs() {

    const jsPath = 'js/inject.js';
    let currentPage = 0

    const contentsFrame = window.frames['contentsFrame']
    contentsFrame.onload = function () {
        currentPage = document.getElementById('lastStudyContentsPath2').value
        // chrome.storage.local.set({ currentPage: currentPage }, function () {
        //     console.log('iframe loaded, currentPage setting finish:', currentPage)
        // });

        const temp = document.createElement('script');
        temp.setAttribute('type', 'text/javascript');
        temp.src = chrome.runtime.getURL(jsPath);
        contentsFrame.document.body.appendChild(temp);

        // const button = document.createElement('button');
        // button.setAttribute('type', 'button');
        // button.setAttribute('onclick', 'goClick()');
        // button.innerHTML = 'next';
        // contentsFrame.document.body.prepend(button);
        //
        // const buttonStop = document.createElement('button');
        // buttonStop.setAttribute('type', 'button');
        // buttonStop.setAttribute('onclick', 'stopRunning()');
        // buttonStop.innerHTML = 'stop auto';
        // contentsFrame.document.body.prepend(buttonStop);
        //
        // const buttonRun = document.createElement('button');
        // buttonRun.setAttribute('type', 'button');
        // buttonRun.setAttribute('onclick', 'runClick()');
        // buttonRun.innerHTML = 'auto run';
        // contentsFrame.document.body.prepend(buttonRun);
        //
        const buttonInit = document.createElement('button');
        buttonInit.setAttribute('type', 'button');
        buttonInit.setAttribute('onclick', 'initCurrentPage()');
        buttonInit.innerHTML = 'init';
        contentsFrame.document.body.prepend(buttonInit);

        const buttonJump = document.createElement('button');
        buttonJump.setAttribute('type', 'button');
        buttonJump.setAttribute('onclick', 'videoJump()');
        buttonJump.innerHTML = 'video jump';
        contentsFrame.document.body.prepend(buttonJump);

        const descSpan = document.createElement('span');
        descSpan.setAttribute('id', 'descSpan');
        descSpan.innerHTML = "'video jump' 클릭, 영상완료 까지 대기 후 영상 우측하단 '>' 클릭 하여 다음 수업으로 이동하세요.";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    injectCustomJs();
});

console.log(document)
