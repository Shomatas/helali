import {menuOnResize} from './blocks/menu/menu.js';
import {leadOnResize} from './blocks/lead/lead.js';

window.onresize = () => {
  menuOnResize();
  leadOnResize();
}

window.onload = () => {
  menuOnResize();
  leadOnResize();
}
