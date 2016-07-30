// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  $("#report-button").click(function(e){
    e.preventDefault;
    $("#report-button").hide();
    $("#image").show();
  })

  var path = "https://watson-api-explorer.mybluemix.net/visual-recognition/api/v3/classify?api_key=3318bf584c9adc67ab7f3ac662e0b72e390bc4e7&version=2016-05-19";

  var form = $('#image');

  form.on("submit", function(e){
    e.preventDefault();

    var req = new XMLHttpRequest();
    req.open("POST", path);
    req.setRequestHeader("Accept", 'application/json');
    req.setRequestHeader("Accept-Language", 'en');

    var formData = new FormData(form[0]);
    formData.append('parameters', JSON.stringify({'classifier_ids': ['hillary_or_trump_2135190280'], 'threshold': 0.6}));

    req.send(formData);

    req.onload = function(e){
      console.log('success');
      var responseData = JSON.parse(this.response);
      console.log(responseData);
      $.post('/people', responseData).done(function(response) {
        $('#photos-box').html(response);
        $('#report-button').hide();
        $('form').hide();
      });
    };

    req.onerror = function(e){
      console.log('err');
      console.log(arguments)
    };

  });
});