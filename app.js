$(document).ready(function() {
    function createGiph(e) {
      e.preventDefault();
  
      const baseUrl = 'http://api.giphy.com/v1/gifs/search?q=';
      const userSearch = $('#searchText').val(); // Example: dog
      const apiKey = '&api_key=dc6zaTOxFJmzC';
  
      const urlToSend = baseUrl + userSearch + apiKey;
  
      // get image from Giphy and add to DOM
      $.getJSON(urlToSend, function(result) {
        const randomIdx = Math.floor(Math.random() * result.data.length);
        const gifurl = result.data[randomIdx].images.fixed_width.url;
        $('#picContainer').append(
          $('<img>')
            .attr('src', gifurl)
            .addClass('pl-3 pr-3 py-2')
        );
        // clear user input
        $('#searchText').val('');
      });
    }
    // event listener for search giphy
    $('#searchButton').on('click', createGiph);
    // event listen for remove images
    $('#removeButton').on('click', function() {
      $('#picContainer').empty();
    });

    // each time page loads, we should get a random #fact
    function generateRandomFact (){
        // grab trivia from Numbers API and append the result to the paragraph
        const $randomFact = $.get("http://numbersapi.com/random/trivia", function(result){ 
          $('<p>').text(`Here's a random number fact: ${result}`).appendTo('#random-fact');
        }) 
    }
    generateRandomFact();
  });