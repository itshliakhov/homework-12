function Slider({ nextSlideButton, prevSlideButton, sliderList }) {
  const prevBtn = document.querySelector(prevSlideButton);
  const nextBtn = document.querySelector(nextSlideButton);
  const _list = document.querySelector(sliderList);
  const slides = Array.from(_list.querySelectorAll("li"));
  let activeIndex = slides.findIndex((elem) =>
    elem.classList.contains("active")
  );
  function disableBtn() {
    if (activeIndex === slides.length - 1) {
      nextBtn.classList.add("non-active");
      return;
    }
    if (activeIndex === 0) {
      prevBtn.classList.add("non-active");
      return;
    }
    nextBtn.classList.remove("non-active");
    prevBtn.classList.remove("non-active");
  }
  function nextSlide() {
    if (activeIndex === slides.length - 1) {
      return;
    }
    slides[activeIndex].classList.remove("active");
    activeIndex += 1;
    disableBtn();
    slides[activeIndex].classList.add("active");
  }
  function previousSlide() {
    if (activeIndex === 0) {
      return;
    }
    slides[activeIndex].classList.remove("active");
    activeIndex -= 1;
    disableBtn();
    slides[activeIndex].classList.add("active");
  }
  this.changeItem = nextSlide;
  this.lengthOfSliders = slides.length;
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", previousSlide);
  console.log("Возврат объекта слайдер:", this);
}
const slider = new Slider({
  nextSlideButton: ".js--nextBtn",
  prevSlideButton: ".js--prevBtn",
  sliderList: ".js--slider_list",
});
