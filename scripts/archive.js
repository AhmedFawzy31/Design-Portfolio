window.addEventListener("DOMContentLoaded", (event) => {
  //lazyload
  const observer = lozad();
  observer.observe();
  const removeModalSrc = function () {
    const modalImg = document.querySelector(".modal img");
    modalImg.src = " ";
  };
  const setModalSrc = function (event) {
    const modalImg = document.querySelector(".modal img");
    const img = event.target;
    modalImg.src = img.src;
    document.querySelector(".modal").classList.toggle("active");
  };
  const imgs = document.querySelectorAll(".modal-img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", setModalSrc);
  }
  document.querySelector(".modal span").addEventListener("click", function () {
    document.querySelector(".modal").classList.toggle("active");
    removeModalSrc();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      document.querySelector(".modal").classList.toggle("active");
      removeModalSrc();
    }
  });
  document.querySelector(".modal").addEventListener("click", function (event) {
    if (document.querySelector(".modal").classList.contains("active")) {
      const modalImg = document.querySelector(".modal img");
      const isClickInside = modalImg.contains(event.target);
      if (!isClickInside) {
        document.querySelector(".modal").classList.toggle("active");
        removeModalSrc();
      }
    }
  });
});
