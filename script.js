console.log("Hello World");
$(document).ready(function() {
    console.log( "ready!" );

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    console.log("button was clicked");

 var querySearch = $("#searchTerm").val();
 console.log(querySearch);

 var apiKey = "KnXfKTj2ri6g27Trqn79u9flYzaPiJWm"
 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + querySearch + "&api-key=" + apiKey;
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response.response.docs[i].headline.main);
            var results = $("<div>");
            var cardResults = $("<p>");
        })

  });
});