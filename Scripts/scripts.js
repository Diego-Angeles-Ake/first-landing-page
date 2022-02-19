$(document).ready(function () {
  //Button events
  $(".button-svcs-right").click(function () {
    $(".flickity-prev-next-button.next").click();
  });

  $(".button-svcs-left").click(function () {
    $(".flickity-prev-next-button.previous").click();
  });

  // Sticky navbar
  window.onscroll = function () {
    stickyFunction();
  };
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function stickyFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

// Burguer menu
function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}
