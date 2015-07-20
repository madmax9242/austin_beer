var test = "test";

$(document).ready(function() {
    check_beer();

});

function check_beer() {
    $('#beer-lookup').on('click', function() {
        $('#beer-info').text('Lame Sauce');
        var beer_type = $('#beer-name').val();
        $.ajax({
    
            url: '/proxy?url=https://api.brewerydb.com/v2/?key=5e62b4fe1d54936af2381e7885987a69&name=' + beer_type,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',

            success: function(data) {
                alert('Test');
                console.log(data);
            },

            error: function() {
                alert('No dice');
            }
        });
    });

}



// Beer API key:  5e62b4fe1d54936af2381e7885987a69