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

        const descSpan = document.createElement('span');
        descSpan.setAttribute('id', 'descSpan');
        descSpan.setAttribute('style', 'position: absolute; background: #ffa4a4; z-index: 999; padding: 10px; top: 0; right: 0; font-size: 12px;')
        descSpan.innerHTML = "<br/>'video jump' 클릭, 영상완료 까지 대기 후 영상 우측하단 '>' 클릭 하여 다음 수업으로 이동하세요. <br/>퀴즈는 점프 안됨으로, 8초대기 후 교육종료 하시면 됩니다.<br/>* 퀴즈가 마지막 영상이 아닌 경우, 전부 풀고 다음 영상으로 넘어가야 교육인증 받습니다.";
        const buttonInit = document.createElement('button');
        buttonInit.setAttribute('type', 'button');
        buttonInit.setAttribute('onclick', 'initCurrentPage()');
        buttonInit.innerHTML = 'init';
        descSpan.prepend(buttonInit);

        const buttonStop = document.createElement('button');
        buttonStop.setAttribute('type', 'button');
        buttonStop.setAttribute('onclick', 'stopRunning()');
        buttonStop.innerHTML = 'stop auto';
        descSpan.prepend(buttonStop);

        const buttonRun = document.createElement('button');
        buttonRun.setAttribute('type', 'button');
        buttonRun.setAttribute('onclick', 'runClick()');
        buttonRun.innerHTML = 'auto run';
        descSpan.prepend(buttonRun);

        const buttonJump = document.createElement('button');
        buttonJump.setAttribute('type', 'button');
        buttonJump.setAttribute('onclick', 'videoJump()');
        buttonJump.innerHTML = 'video jump';
        // contentsFrame.document.body.prepend(buttonJump);
        descSpan.prepend(buttonJump);

        contentsFrame.document.body.prepend(descSpan);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    injectCustomJs();
});

console.log(document)
