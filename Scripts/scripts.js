$(document).ready(function () {
  $(".button-svcs-right").click(function () {
    $(".flickity-prev-next-button.next").click();
  });

  $(".button-svcs-left").click(function () {
    $(".flickity-prev-next-button.previous").click();
  });

  window.onscroll = function () {
    stickyFunction();
  };

  var galleryElems = document.querySelectorAll(".gallery");

  for (var i = 0, len = galleryElems.length; i < len; i++) {
    var galleryElem = galleryElems[i];
    new Flickity(galleryElem, {
      // options...
    });
  }

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
