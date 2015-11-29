// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('button').on('click', function() {
  var x = $('.urlInput').val();
  $.ajax({
           type: "POST",
           url:"/test",
           data: {'body':x},
           success: function(){
               console.log("something!");
           },
           error: function() {
               console.log('there was error');
           }
       });
     });
