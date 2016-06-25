// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  $("#report-button").click(function(e){
    e.preventDefault;
    $("#report-button").hide();
    $("#report-form").show();
  })
  $("#report-form").on("submit", function(e){
    e.preventDefault;
    var target = e.target
    $ajax({
      method: $(target).attr("method"),
      action: $(target).attr("action"),
      dataType: "json",
      data: {people: $(target).serialize()}
    })
  })
});