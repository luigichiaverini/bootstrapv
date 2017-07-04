$(document).ready(function () {

	var root = 'json';

	$.get('html/template.html', function ( userTemplate ) {
		$.ajax({
			url: root + '/sommelier.json',
			method: 'GET', //GET, POST, PUT, DELETE
			contentType: 'application/json', //ask server to return json
			dataType: 'json', //says to server we are sending json
			//Call if request return successfully
			success: function (response) {
				var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
				for(var i = 0; i < 8 ; i ++) {
					var html = template(response[i]);
					$('#somm').append(html)
				}
			},
			//Call in case of request error
			error: function (request, errorType, errorMessage){
				alert('Error: ' + errorType + ', message: ' + errorMessage)
				console.log(request);
			}
		});
	});
});

// Apre il menu mobile    
$("#menu-toggle").click(function(e) {
    $("#wrapper").addClass("toggled");
    console.log('boh');
});

// Chiude il menu mobile
$("#close").click(function(e) {
    $("#wrapper").removeClass("toggled");
});

// Closes the Responsive Menu on Menu Item Click
$("#wrapper").click(function(e) {
    $("#wrapper").removeClass("toggled");
});
