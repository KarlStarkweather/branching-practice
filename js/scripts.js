$(document).ready(function() {
  $("#choose-animal").change(function() {
    const animal = $("#choose-animal").val();
    if (animal === "Moose") {
      $("#Moose").toggle();  
    }
  });
});
$(document).ready(function() {
  $("#choose-animal").change(function() {
    const animal = $("#choose-animal").val();
    if (animal === "#Iguana") {
      $("#Iguana").toggle();  