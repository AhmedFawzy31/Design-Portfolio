window.addEventListener("DOMContentLoaded", (event) => {
  setCarouselSize();
  window.addEventListener("resize", setCarouselSize);
  function setCarouselSize() {
    const r = document.querySelector(":root");
    let vh = window.innerHeight;
    let headerHeight = document.querySelector("header").offsetHeight;
    console.log(headerHeight);
    r.style.setProperty("--imgHeight", vh - headerHeight - 50 + "px");
  }
  const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1.5,
    centeredSlides: true,
    autoplay: true,
    lazy: true,
  });
});
