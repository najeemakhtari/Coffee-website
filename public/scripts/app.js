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
const dropDownArrow = document.querySelector("#dropdown-arrow");
mobileNavDropDownBtn.addEventListener('click', ()=>{
    dropDownElem.classList.toggle('open-submenu');
    mobileNavDropDownBtn.classList.toggle('text-orange-300');
    dropDownArrow.classList.toggle('rotate-arrow')

})

////// mobile nav open and close
const mobileNavCloseBtn = document.querySelector('#nav-close');
const mobileNavElem = document.querySelector('#mobile-nav');
const overlayElem = document.querySelector('.overlay');
const barsBtn = document.querySelector('#bars-btn');

///open
barsBtn.addEventListener('click',()=>{
    mobileNavElem.classList.add('right-0');
    mobileNavElem.classList.remove('-right-64');
    overlayElem.classList.add('overlay--visible')
})

////close
mobileNavCloseBtn.addEventListener('click',()=>{
    mobileNavElem.classList.remove('right-0');
    mobileNavElem.classList.add('-right-64');
    overlayElem.classList.remove('overlay--visible')
})

////////mobile shopping close and open
const mobileShoppingCloseBtn = document.querySelector('#close-shopping');
const mobileShoppingElem = document.querySelector('#mobile-shopping');
const mobileCartIcon = document.querySelector('#mobile-cart-icon')
//open
mobileCartIcon.addEventListener('click',()=>{
    mobileShoppingElem.classList.remove('-left-64')
    mobileShoppingElem.classList.add('left-0');
    overlayElem.classList.add('overlay--visible')
})
///close
mobileShoppingCloseBtn.addEventListener('click',()=>{
    mobileShoppingElem.classList.remove('left-0');
    mobileShoppingElem.classList.add('-left-64')
    overlayElem.classList.remove('overlay--visible')
})

//////overlay clicking handler
overlayElem.addEventListener('click',()=>{
    overlayElem.classList.remove('overlay--visible')
    mobileNavElem.classList.remove('right-0');
    mobileNavElem.classList.add('-right-64');
    mobileShoppingElem.classList.remove('left-0');
    mobileShoppingElem.classList.add('-left-64')
})



