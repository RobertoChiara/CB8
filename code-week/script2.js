// Maps
//MapsAPIkey= "AIzaSyD2tFe7R7z6rcyfK3xKq8yWLz7-dRkDovg";
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 37.6, lng: 14 },
  });

  const provinces = [
    ["Palermo", 38.123105, 13.348044],
    ["Trapani", 38.016808, 12.540533],
    ["Agrigento", 37.309902, 13.583279],
    ["Catania", 37.510381, 15.077688],
    ["Messina", 38.1827, 15.541912],
    ["Siracusa", 37.085915, 15.283546],
    ["Ragusa", 36.924003, 14.720339],
    ["Caltanissetta", 37.488932, 14.053798],
    ["Enna", 37.566283, 14.275257],
  ];

  for (let i = 0; i < provinces.length; i++) {
    const province = provinces[i];

    new google.maps.Marker({
      position: { lat: province[1], lng: province[2] },
      map: map,
      title: province[0],
    });
  }
}

window.initMap = initMap;
