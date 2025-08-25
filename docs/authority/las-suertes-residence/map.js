const map = L.map('map').setView([-7.99848, 169.76795], 17);

	const tiles = L.tileLayer('https://tile.opengeofiction.net/ogf-carto/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://wiki.opengeofiction.net/index.php/OpenGeofiction:Copyright">OpenGeofiction</a>'
	}).addTo(map);

	var marker = L.marker([-7.99817, 169.76925]).addTo(map);
	marker.bindPopup("We're located here!").openPopup();
