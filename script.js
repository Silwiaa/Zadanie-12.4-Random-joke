// SET RANDOME JOKE BY CLICKING BUTTON
var url = 'http://api.icndb.com/jokes/random',
    button = document.getElementById('get-joke');
button.addEventListener('click', function() {
  getJoke();
});

// SET JOKE OUTPUT
var paragraph = document.getElementById('joke');

// SHOW JOKE WHEN WEB IS LOADED
document.addEventListener("DOMContentLoaded", getJoke());

// getJoke FUNCTION
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}