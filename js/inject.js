console.log("I'm injected!")
let currentPage = 0
const contentsFrame = document.getElementById('contentsFrame')
contentsFrame.onload = function () {
    console.log("iframe loaded")
    currentPage = document.getElementById('lastStudyContentsPath2').value

    const temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL('js/inject_frame.js');
    contentsFrame.document.head.appendChild(temp);
}
const tryGoNextPage = ()=> {

}