

$(document).ready(function() {
    check_beer();
    filter_beer();

});

function check_beer() {
    $('#beer-lookup').on('click', function() {
        $('#beer-info').text('Lame Sauce');
        var beer_type = $('#beer-name').val();
        $.ajax({
    
            url: 'https://api.brewerydb.com/v2/?key=5e62b4fe1d54936af2381e7885987a69&name=' + beer_type,
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

function filter_beer() {
    $('#beer-selector').change(function() {
        var choice = $('#beer-selector').val();
        $('.hidden').val(choice);
        $.ajax({
            url: '/pairs',
            method: 'GET',
            dataType: 'json',

            success: function(data) {
                var choice_array = [];
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i]['beer_type']);
                    if (data[i]['beer_type'] == choice) {
                        $('#pairs_list').html('');
                        choice_array.push(data[i]);
                        console.log(choice_array);
                    }
                }

            },

            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus + "    " + errorThrown);
            }

        });
    });
}




// Beer API key:  5e62b4fe1d54936af2381e7885987a69