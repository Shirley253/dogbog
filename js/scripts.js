$(document).ready(function() {
  $("button#black").click(function() {
    $("body").toggleClass("black-background");
  });
  $("button#border").click(function() {
    $("li").toggleClass("border-highlight");
  });
});
