const ERR_MSG = "오류가 발생했습니다😥 잠시 후 다시 접속해주세요!"

//index
let enterBtn = $('#enter-to-book')
let createNewBookBtn = $('#create-book-btn')

if(enterBtn) enterBtn.click(openBook)
else alert(ERR_MSG)

if(createNewBookBtn) createNewBookBtn.click(createBook)
else alert(ERR_MSG)


function openBook(){
    let bookName = $('#input-bookname').val()
    //let spaceRemoved = bookName.replace(/ /g,"")
    location.href = `/${bookName}`
}

function createBook(){
    let bookName = $('#new-notebook-name').val()
    location.href = `/create/${bookName}`
}

