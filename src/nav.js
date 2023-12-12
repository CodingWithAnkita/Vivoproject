
let toggleBtn = document.getElementById('toggleBtnId')
console.log(toggleBtn)
toggleBtn.addEventListener('click', function(){
    document.getElementById('mobDivId').classList.add('show')
})

let closeBtn = document.getElementById('closeBtnId')
console.log(closeBtn)
closeBtn.addEventListener('click', function(){
    document.getElementById('mobDivId').classList.remove('show')
})