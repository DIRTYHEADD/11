"use strict";
// Фильтр с плавным движением картинок=================================================================
function imagesInit() {
  const images = document.querySelectorAll(".portfolio__image");
  if (images.length) {
    images.forEach((image) => {
      const imageItem = image.querySelector("img");
      const padding = (imageItem.offsetHeight / imageItem.offsetWidth) * 100;
      image.getElementsByClassName.paddingBottom = `${padding}%`;
      imageItem.classList.add("init");
    });
  }
}

function gridInit() {
  const items = document.querySelector(".portfolio__items");
  const itemsGrid = new Isotope(items, {
    itemSelector: ".portfolio__item",
    masonry: {
      fitWidth: true,
      gutter: 20,
    },
  });

  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest(".filter-portfolio__item")) {
      const filterItem = targetElement.closest(".filter-portfolio__item");
      const filterValue = filterItem.dataset.filter;
      const filterActiveItem = document.querySelector(
        ".filter-portfolio__item.active"
      );

      filterValue === "*"
        ? itemsGrid.arrange({ filter: `` })
        : itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` });

      filterActiveItem.classList.remove("active");
      filterItem.classList.add("active");

      e.preventDefault();
    }
  }
}

window.addEventListener("load", windowLoad);

function windowLoad() {
  imagesInit();
  gridInit();
}

// ==Плавная прокрутка по якорю=============================================================================================

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// =====Замедленная прокрутка фона============================================================================================

$(window).scroll(function (event) {
  var s = 0 - $(this).scrollTop() / 2;
  $(".full__img").css("transform", "translate3d(0, " + s + "px, 0)");
});

// ===<ZOOM>=========================================================================================

// if ($(".gallery").length > 0) {
//   baguetteBox.run(".gallery", {});
// }

// ===</ZOOM>=========================================================================================

// ===<MENU-BURGER>=========================================================================================

$(document).ready(function () {
  $(".header-about__burger").click(function (event) {
    $(".header-about__burger, .header-about__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// ===</MENU-BURGER>=========================================================================================
