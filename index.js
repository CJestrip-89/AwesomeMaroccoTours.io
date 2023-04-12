let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

// Header funtionalities
const headerEl = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerEl.classList.add("header-scrolled");
  } else if (window.scrollY <= 0) {
    headerEl.classList.remove("header-scrolled");
  }
});

let textElement = document.querySelector(".text");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    textElement.classList.add("scroll-text");
  } else if (window.scrollY <= 0) {
    textElement.classList.remove("scroll-text");
  }
});

let headerLogo = document.querySelector(".logo-img");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerLogo.classList.add("logo-img__scroll");
  } else if (window.scrollY <= 0) {
    headerLogo.classList.remove("logo-img__scroll");
  }
});

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
