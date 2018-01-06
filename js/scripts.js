/*jshint esversion: 6 */ 
(function() {

    let button = document.querySelector("#button"),
        output = document.querySelector("#output");
	
	button.addEventListener("click", function() {
		
		getJSON("http://code.eduweb.pl/bootcamp/json/", function(data) {
			console.log("Sukces");
			data.forEach(getData);

		}, function(err) {
			console.log("Wystąpił błąd!");
			console.log(err.message);
		});
	});

	function getData(item) {
    	let {
			name, 
			 username, 
			 email, 
			 address: {
			 	geo: {
					0: x,
					1: y
				}
			},
			 website,
			 company: {
				 name: companyName
			 }
		} = item;
	
		let template = `Imię: ${name}, <br> 
			Nazwa użytkownika: ${username}, <br> 
			Email: ${email}, <br>
			Strona internetowa: <a href="http://${website}">${website}</a>, <br>
			Lokalizacja: <a href="http://bing.com/maps/default.aspx?cp=${x}~${y}">Pokaż na mapie</a>, <br>
			Firma: ${companyName}`;
		
		let div = document.createElement("div");
		
		div.innerHTML = template;
		div.className = "template";
	
		output.appendChild(div);
	}

})();
