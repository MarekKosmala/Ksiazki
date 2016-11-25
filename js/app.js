$(function() {
  console.log('DOM zaladowany');

  //   $.ajax({
  //       url: 'http://date.jsontest.com/',
  //       data: {},
  //       type: 'GET',
  //       dataType: 'json',
  //       success: function(json) {
  //         console.log('sukces!', json);
  //       },
  //       error: function(xhr, status, error) {
  //         console.log('blad', error);
  //       },
  //       complete: function(xhr, status) {
  //         console.log('wykonano zapytanie', xhr);
  //       }
  // });

    $('button').click(function() {

          $.get('http://date.jsontest.com/', function(json) {
            console.log(json);

              var czas = $('<p><b>Czas: ' + json.time + '</b></p>');
              var timestamp = $('<p><b>timestamp:</b> ' + json.milliseconds_since_epoch + '</p>');
              var data = $('<p><b>Data:</b> ' + json.date + '<p>');

              $('div#json').empty();
              $('div#json').prepend(czas);
              $('div#json').prepend(timestamp);
              $('div#json').prepend(data);

          });

    });

});
