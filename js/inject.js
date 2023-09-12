console.log("I'm injected!")
const innerFrame = window.frames['frame']

const videoJump = ()=> {
    const video = innerFrame.document.getElementById('video')
    video.currentTime = video.duration - 1
}
const initCurrentPage = () => {
    next_click('01.html','N')
}
// let autoRun = false
// const goClick = () => {
//     const currentPage = parseInt(parent.document.getElementById('lastStudyContentsPath2').value)
//     const isLastPage = parent.document.getElementById('lastPgYn').value === 'Y'
//     console.log('goClick! currentPage:', currentPage, 'isLastPage:', isLastPage);
//     if(isLastPage) {
//         alert('마지막페이지 입니다. 교육종료 버튼을 눌러주세요.');
//     }else{
//         next_click(itostr(currentPage+1) + '.html', 'N')
//     }
// }
// const runClick = () => {
//     autoRun = true
//     // const isLastPage = parent.document.getElementById('lastPgYn').value === 'Y'
//
//     console.log(getDuration())
//     const duration = getDuration() * 1000
//     videoJump()
//     setTimeout(() => {
//         if(duration > 0){
//             goClick();
//         }else {
//             autoRun = false
//         }
//         if(autoRun){
//             setTimeout(() => {
//                 runClick();
//             }, 3000)
//         }
//     }, 5000)
// }
// const runClick = () => {
//     autoRun = true
//     const isLastPage = parent.document.getElementById('lastPgYn').value === 'Y'
//
//     console.log(getDuration())
//     const duration = getDuration() * 1000
//     setTimeout(() => {
//         if(duration > 0){
//             goClick();
//         }else {
//             autoRun = false
//         }
//         if(autoRun && !isLastPage){
//             setTimeout(() => {
//                 runClick();
//             }, 2000)
//         }
//     }, duration + 5000)
// }

// const stopRunning = () => {
//     autoRun = false
// }

// const getDuration = () => {
//     return innerFrame.document.getElementById('video').duration
// }

