console.log("I'm injected!")
const goClick = () => {
    const currentPage = parseInt(parent.document.getElementById('lastStudyContentsPath2').value)
    const isLastPage = parent.document.getElementById('lastPgYn').value === 'Y'
    console.log('goClick! currentPage:', currentPage, 'isLastPage:', isLastPage);
    if(isLastPage) {
        alert('마지막페이지 입니다. 교육종료 버튼을 눌러주세요.');
    }else{
        next_click(itostr(currentPage+1) + '.html', 'N')
    }
}
const runClick = () => {
    const isLastPage = parent.document.getElementById('lastPgYn').value === 'Y'

    setTimeout(() => {
        goClick();
        if(!isLastPage){
            runClick();
        }
    }, 6000)
}

const initCurrentPage = () => {
    next_click('01.html','N')
}
