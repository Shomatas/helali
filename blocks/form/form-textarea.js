const textarea = document.querySelector('.form-textarea');
console.log(textarea);

textarea.onfocus = () => {
  textarea.rows = 3;
}
