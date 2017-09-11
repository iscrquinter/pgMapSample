function onSuccess(position) {
    var coords = position.coords;
    initMap(coords.latitude, coords.longitude);
}

function initMap(lat, long) {
    var options= {
        zoom : 8,
        center : new google.maps.LatLng(lat, long),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), options);
    var markerPoint = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker(
        {
            position : markerPoint,
            map : map,
            title : 'Localizacion Dispositivo'
        }
    );
}

function onFailure(error) {
    alert(error.message);
}