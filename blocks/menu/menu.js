import {createBurger} from '../burger/burger.js';

const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");
const burger = createBurger();

const openMenu = () => {
  menuList.classList.remove("menu__list-mobile_disable");
  menuList.classList.add("menu__list-mobile_active");
}

export const menuOnResize = () => {
  let isBurgerContains = document.body.contains(burger);
  if(window.screen.width <= 700 &&
     !isBurgerContains){
    menuList.classList.add("menu__list-mobile");
    menuList.classList.add("menu__list-mobile_disable");
    burger.onclick = openMenu;
    menu.appendChild(burger);
  }
  else if(window.screen.width > 700 &&
  isBurgerContains){
    burger.remove();
    menuList.classList.remove("menu__list-mobile");
    menuList.classList.remove("menu__list-mobile_disable");
    menuList.classList.remove("menu__list-mobile_active");
  }
}
