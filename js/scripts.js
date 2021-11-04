// Moose
$(document).ready(function() {
  $("#choose-animal").change(function() {
    const animal = $("#choose-animal").val();
    $("#Moose").hide();
    $("#Iguana").hide();
    $("#Turkey").hide();
    $("#Aardvark").hide();

    $("#"+animal).show();
    // if (animal === "Moose") {
    //   $("#Moose").show();  
    // } else if (animal === "Iguana") {
    //   $("#Iguana").show();
    // } else if (animal === "Turkey") {
    //   $("#Turkey").show();
    // } else if (animal === "Aardvark") {
    //   $("#Aardvark").show();
    // }
  });
});
