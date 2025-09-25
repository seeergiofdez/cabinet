const map = L.map('map').setView([-7.9970, 169.7649], 16);

	const tiles = L.tileLayer('https://tile.opengeofiction.net/ogf-carto/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://wiki.opengeofiction.net/index.php/OpenGeofiction:Copyright">OpenGeofiction</a>'
	}).addTo(map);

	marker.bindPopup("We're located here!").openPopup();
