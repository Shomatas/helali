import {createBurger} from '../burger/burger.js';

const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");
const burger = createBurger();
let isOpenMenu = false;

const openMenu = () => {
  document.querySelector('.lead').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  menuList.classList.remove("menu__list-mobile_disable");
  menuList.classList.add("menu__list-mobile_active");
  isOpenMenu = true;
  burger.onclick = closeMenu;
  burger.classList.add('burger_active');
  document.querySelector('body').style = 'overflow: hidden';
}

const closeMenu = () => {
  menuList.classList.remove("menu__list-mobile_active");
  menuList.classList.add("menu__list-mobile_disable");
  burger.onclick = openMenu;
  burger.classList.remove('burger_active');
  document.querySelector('body').style = 'overflow: none';
}

export const menuOnResize = () => {
  let isBurgerContains = document.body.contains(burger);
  if(window.screen.width <= 730 &&
     !isBurgerContains){
    menuList.classList.add("menu__list-mobile");
    menuList.classList.add("menu__list-mobile_disable");
    if (!isOpenMenu) burger.onclick = openMenu;
    else burger.onclick = closeMenu;
    menu.appendChild(burger);
  }
  else if(window.screen.width > 730 &&
  isBurgerContains){
    isOpenMenu = false;
    burger.remove();
    menuList.classList.remove("menu__list-mobile");
    menuList.classList.remove("menu__list-mobile_disable");
    menuList.classList.remove("menu__list-mobile_active");
  }
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let link of smoothLinks){
  link.onclick = (e) => {
    if (window.screen.width <= 768){
      closeMenu();
    }
    e.preventDefault();
    const id = link.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
