let menuBtn = document.getElementById('menuBtn')
let listMenu = document.getElementById('listMenu')
let closeBtn = document.getElementById('closeBtn')



menuBtn.addEventListener('click',()=>{
    listMenu.classList.add('open')

 
})

closeBtn.addEventListener('click',()=>{
    if(listMenu.classList.contains('open')){


        listMenu.classList.remove('open')


    }
})