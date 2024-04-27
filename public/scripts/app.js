"use strict";

////theme toggle 
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

//////mobile nav dropdown
const mobileNavDropDownBtn = document.querySelector('#nav-dropdown');
const dropDownElem = document.querySelector('.submenu');
mobileNavDropDownBtn.addEventListener('click', ()=>{
    dropDownElem.classList.toggle('open-submenu')
    mobileNavDropDownBtn.classList.toggle('text-orange-300')
})

////// mobile nav open and close
const mobileNavCloseBtn = document.querySelector('#nav-close');
mobileNavCloseBtn.addEventListener('click',()=>{
    console.log('hello')
})