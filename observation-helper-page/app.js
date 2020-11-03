const images = ['1.png','2.png', '3.png','4.png']
const btn = document.querySelector('#btn')
// const slides = document.querySelector('#slides')

btn.addEventListener('click', () => {
    window.location.href = "https://drive.google.com/file/d/1RHr6dacFYBkorTgP9PTbTVhTFXqAgnUL/view?usp=sharing"
})

var slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3500); // Change image every 3.5 seconds
}