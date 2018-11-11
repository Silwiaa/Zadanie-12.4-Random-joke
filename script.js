var url = 'http://api.icndb.com/jokes/random',
    button = document.getElementById('get-joke'),
    $button = $('#get-joke').click(function() {
        getJoke();
    }),
    $paragraph = $('#joke');

function getJoke() {
    $.ajax({
        method: 'GET',
        url: url,
        success: function(res){
            $paragraph.text(res.value.joke);
        }
    });  
}
