
function initMap() {
	var PUUUR_TYPE = 'puur-type';
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 0,
		center: {lat: 25.657536, lng: -100.366742},
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, PUUUR_TYPE]
		}
	});

	map.mapTypes.set(PUUUR_TYPE, puurTypeMap());
}


function puurTypeMap() {
	var tileSize = google.maps.Size(256,256);
	return new google.maps.ImageMapType({
		alt : "Cat Map",
		getTileUrl: function(tileCoord, zoom, ownerDocument) {
			var i = Math.ceil( Math.random() * 10 );
			return "http://placekitten.com/256/256?image=" + i;
		},
		tileSize: tileSize,
		minZoom: 0,
		maxZoom: 10,
		name: 'Cat Map'
	});
}
