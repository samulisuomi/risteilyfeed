$(document).ready(function() {
	var feed = new Instafeed({
        get: 'tagged',
        tagName: 'jouluristeily',
        limit: 10,
        clientId: '02133fc6740f436ea05348c5483877d0',
        useHttp: true
    });
	if(typeof(Storage) !== "undefined") {
		$("#debug").text("toimii!");
	} else {
		$("#debug").text("ei toimi!");
	}

    feed.run();
});