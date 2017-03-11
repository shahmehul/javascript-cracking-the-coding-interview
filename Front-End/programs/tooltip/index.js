$(document).ready(
    function(){
     var tooltipData = {};
     $("#id1").hover(
      function() {
        var id = $(this)[0].id;
        if (tooltipData[id]) {
          $(`#${id} .tooltiptext`).html(tooltipData.id);
        } else {
          var root = 'https://jsonplaceholder.typicode.com';
          $.ajax({
            url: root + '/posts/1',
            method: 'GET'
          }).then(function(data) {
            $(`#${id} .tooltiptext`).html(data.body);
            tooltipData[id] = data.body;
          });
        }
      }
      );
   }
 );


