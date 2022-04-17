const lead__container = document.querySelector(".lead__container");
const container_item1 = document.querySelector(".lead__container-item_1");
const container_item2 = document.querySelector(".lead__container-item_2");

export const leadOnResize = () => {
  const isTitleContain = document.body.contains(container_item2);
  if(window.screen.width <= 730 &&
    isTitleContain){
      container_item2.remove();
      container_item1.childNodes[1].innerHTML = 'We are <strong class="strong strong_light-green">Creative</strong>';
    }
  else if(window.screen.width > 730 &&
  !isTitleContain){
    container_item1.childNodes[1].textContent = "We are";
    lead__container.appendChild(container_item2);
  }
}
