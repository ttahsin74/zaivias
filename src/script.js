// let slideIndex = 0;
// const slides = document.querySelector(".slides");
// const slideCount = document.querySelectorAll(".slide").length;
// const slidesToShow = 5;
// const slidesToScroll = 5;

// function changeSlide(n) {
//   slideIndex += n * slidesToScroll;
//   if (slideIndex >= slideCount - slidesToShow + 1) {
//     slideIndex = 0;
//   } else if (slideIndex < 0) {
//     slideIndex = slideCount - slidesToShow;
//   }
//   updateSlides();
// }

// function updateSlides() {
//   const slideWidth = document.querySelector(".slide").clientWidth;
//   slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
// }

// window.addEventListener("resize", updateSlides);
// updateSlides();




// Function to set active tab
function setActiveTab(tabId) {
  // Get all tab buttons and panels
  const tabButtons = document.querySelectorAll(".tabButton");
  const tabPanels = document.querySelectorAll(".tabPanel");

  // Hide all tab panels
  tabPanels.forEach(function (tabPanel) {
    tabPanel.classList.add("hidden");
  });

  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove(
      "border-b-2",
      "border-b-transparent",
      "text-white"
    );
    tabButton.classList.add("bg-tranarent");
  });

  document
    .getElementById("tabPanel" + tabId.slice(-1))
    .classList.remove("hidden");
  document.getElementById(tabId).classList.remove("bg-gray-200");
  document
    .getElementById(tabId)
    .classList.add("border-b-2", "border-b-white", "text-white");
}
document.addEventListener("DOMContentLoaded", function () {
  setActiveTab("tab1");
});

document.querySelectorAll(".tabButton").forEach(function (tabButton) {
  tabButton.addEventListener("click", function () {
    let tabId = this.getAttribute("id");
    setActiveTab(tabId);
  });
});



// ======================navber js=======================
// ======================navber js=======================

let searchClick = document.getElementById("searchBox");
let searchClose = document.getElementById("closeSearch");
let searchShow = document.getElementById("showSearchItems");

searchClick.onclick = function () {
  searchShow.classList.remove("top-[-120%]");

  searchShow.classList.add("top-[0px]");
};
searchClose.onclick = function () {
  searchShow.classList.remove("top-[0px]");
  searchShow.classList.add("top-[-120%]");
};
