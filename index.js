import {menuOnResize} from './blocks/menu/menu.js';
import {leadOnResize} from './blocks/lead/lead.js';
import './blocks/slider/slider.js';

window.onresize = () => {
  menuOnResize();
  leadOnResize();
}

window.onload = () => {
  menuOnResize();
  leadOnResize();
}
