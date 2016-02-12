console.log("HELLO FROM THE JAVASCRIPT CONSOLE!");

$.ajax({
  type: 'GET',
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=2de143494c0b295cca9337e1e96b00e0",
  success: function(data) {
    console.log("We have your weather!");
    console.log(data);
  },
  error: function() {
    console.error("An error occured.");
  },
});

console.log("another console log");

// When does the request get sent?    after document is ready
// When does the response come back?  after document request is sent (document already rendered)
// What's the current weather in New York?
// Did the page refresh? No
// How could we use different HTTP methods in our request? change methods in type
