$(document).ready(function() {
  $('#beer-lookup').on('click', function() {
    var beer_type = $('#beer-name').val();
    console.log(beer_type);
    $.ajax({
    	dataType: 'json',
    	type: 'get',
    	url: 'http://api.brewerydb.com/v2/?key=5e62b4fe1d54936af2381e7885987a69',
    	data: {
    		name: 'Bud Light'
    	},

    	success: function(data) {
    		alert('Test');
    		console.log(data);
    	},

    	error: function() {
    		alert('No dice');
    	}
    });
  });

});



// Beer API key:  5e62b4fe1d54936af2381e7885987a69