var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    grapcursor: true,
    loop: true,
  
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1250: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
  });


  function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);


  
  
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav_menu");

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav_menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
