$(window).scroll(function() {
  if ($(this).scrollTop() > 50) /*height in pixels when the navbar becomes non opaque*/ {
    $('.opaque-navbar').addClass('opaque');
    $('.navbar-brand').addClass('shrink');
    $('.nav-logo').addClass('shrink');
  } else {
    $('.opaque-navbar').removeClass('opaque');
    $('.navbar-brand').removeClass('shrink');
    $('.nav-logo').removeClass('shrink');
  }
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

