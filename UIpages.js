const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
let curSlide = 0;
let MaxSlide = slides.length;
const moveSlide = function (cur) {
  if (cur == 0) {
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add(`s1-${i + 1}`);
      slides[i].classList.remove(`s2-${i + 1}`);
      slides[i].classList.remove(`s3-${i + 1}`);
      slides[i].classList.remove(`s4-${i + 1}`);
    }
  } else if (cur == 1) {
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add(`s2-${i + 1}`);
      slides[i].classList.remove(`s1-${i + 1}`);
      slides[i].classList.remove(`s3-${i + 1}`);
      slides[i].classList.remove(`s4-${i + 1}`);
    }
  } else if (cur == 2) {
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add(`s3-${i + 1}`);
      slides[i].classList.remove(`s1-${i + 1}`);
      slides[i].classList.remove(`s2-${i + 1}`);
      slides[i].classList.remove(`s4-${i + 1}`);
    }
  } else if (cur == 3) {
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add(`s4-${i + 1}`);
      slides[i].classList.remove(`s1-${i + 1}`);
      slides[i].classList.remove(`s2-${i + 1}`);
      slides[i].classList.remove(`s3-${i + 1}`);
    }
  }
};

moveSlide(curSlide);
function slideRight() {
  if (curSlide === MaxSlide - 1) {
    curSlide = 0;
    moveSlide(curSlide);
  } else {
    curSlide++;
    moveSlide(curSlide);
  }
}
function slideLeft() {
  if (curSlide === 0) {
    curSlide = MaxSlide - 1;
    moveSlide(curSlide);
  } else {
    curSlide--;
    moveSlide(curSlide);
  }
}
btnRight.addEventListener("click", slideRight);
btnLeft.addEventListener("click", slideLeft);
