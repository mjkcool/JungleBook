//index
let enterBtn = $('#enter-to-book')

if(enterBtn){
    enterBtn.click(openBook)
}else{
    alert("오류가 발생했습니다😥 잠시 후 다시 접속해주세요!")
}

function openBook(){
    let bookName = $('#input-bookname').val()
    let spaceRemoved = bookName.replace(/ /g,"")
    if(spaceRemoved == ""){
        alert("조회할 노트북 이름을 입력해주세요.")
    }
    
    if(true){ //존재하는 노트북인지

    }
    location.href = `/${spaceRemoved}`
}
