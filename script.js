function initMap(){
    const home = {lat: 6.797608765215112, lng: 79.90173433478404};
    const uni = {lat: 6.79, lng: 79.90173433478404};
    map = new google.maps.Map(document.getElementById('map'),{

        center: uni,
        zoom: 15,
        mapId: 'd6d1205e9187fda7'
    });

    new google.maps.Marker({
        position: home,
        map,
        title: "My home"

    });
    new google.maps.Marker({
        position: uni,
        map,
        title: "University"

    });



}
