$(document).ready(function() {
  $("#firstP").click(function() {
    $("#introText").toggleClass("border");
    $("#firstP").toggleClass("highlight")
  });

  $("#secondP").click(function() {
    $("#non-intro").toggleClass("border");
    $("#secondP").toggleClass("highlight")
  });
});
