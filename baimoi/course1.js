let thispage = 1;
let limit = 6;
let list = document.querySelectorAll('.row-1 .item-1')

function loaditem() {
    let begin = limit * (thispage - 1)
    let endGet = limit*thispage - 1
    list.forEach((item, key) => {
        if(key>=begin && key<=endGet) {
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
    lisPage()
}
loaditem()
function lisPage() {
    let count = Math.ceil(list.length / limit)
    document.querySelector('.listpage').innerHTML = ''


    if(thispage != 1){
        let prev = document.createElement('li')
        prev.innerText= "PREV"
        prev.setAttribute('onclick', "changePage("+(thispage - 1)+")")
        document.querySelector('.listpage').appendChild(prev)

    }
    for(i = 1; i<=count; i++) {
        let newPage = document.createElement('li')
        newPage.innerText = i
        if(i == thispage) {
            newPage.classList.add('active')
        }
        newPage.setAttribute('onclick', "changePage("+i+")")
        document.querySelector('.listpage').appendChild(newPage)
    }

    if(thispage!=count){
        let next = document.createElement('li')
        next.innerText = 'NEXT'
        next.setAttribute('onclick', "changePage("+(thispage+1)+")")
        document.querySelector('.listpage').appendChild(next)
    }
}
function changePage(i) {
    thispage = i
    loaditem()
}

const input = document.querySelector('.input-courses input')
const row = document.querySelectorAll('.item-1')
input.addEventListener('input', function(e) {
    const inputt = e.target.value.toLowerCase()
    row.forEach(item => {
        const item1 = item.getAttribute('type')
        if(item1.includes(inputt)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'

        }

    })
})