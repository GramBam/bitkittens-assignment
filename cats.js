$(document).ready(function() {

  $(".summon-cats").on('click', function() {

    $.ajax ({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      dataType: 'json'

    }).done(function(responseData) {
      console.log(responseData);

      for (var i=0; i < responseData.cats.length; i++) {

        $('<img>').attr({
          src: responseData.cats[i].photo,
          alt: 'Photo of ' +  responseData.cats[i].name }).appendTo('#cat'+ (i+1));

      }

    });

  });

});
