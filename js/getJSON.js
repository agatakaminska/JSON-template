function getJSON(url, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.setRequestHeader("Accept", "application/json");
	xhr.responseType = 'json';

    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status < 400) {
            if(typeof success === "function") {
                success(xhr.response);
            }
        } else {
            if(typeof failure === "function") {
                failure(new Error("Wystąpił błąd. Status: " + xhr.status));
            }
        }
    };

    xhr.onerror = function() {
        if(typeof failure === "function") {
            failure( new Error("Wystąpił błąd w komunikacji z serwerem.") );
        }
    };
    xhr.send();

}
