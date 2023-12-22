$(document).ready(function () {
  $(document).on("click", ".main-partner-category nav ul li a", function (e) {
    let width = $(document).width();
    if (width <= 768) {
      e.preventDefault();
      $(".main-partner-category nav ul li a").removeClass("active");
      $(this).addClass("active");
      $(".section1,.section2,.section3").hide();
      var id = $(this).attr("href");
      $(id).show();
    }
  });
});
