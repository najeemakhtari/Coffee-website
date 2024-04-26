"use strict";

const toggleBtns = document.querySelectorAll('.toggle-btn')

toggleBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
            if(localStorage.theme =='dark'){
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark')
    }
    })
})


