// Maps

const neighborhoods = [
    { lat: 40.965149, lng: -5.664018 },
    { lat: 40.960623, lng: -5.665958},
    { lat: 40.961170, lng: -5.667384 },
    { lat: 40.959500, lng: -5.666869 },
  ];
  let markers = [];
  let map;
  
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 40.970104, lng: -5.663540 },
    });
    document.getElementById("drop").addEventListener("click", drop);
  }
  
  function drop() {
    clearMarkers();
  
    for (let i = 0; i < neighborhoods.length; i++) {
      addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
  }
  
  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(() => {
      markers.push(
        new google.maps.Marker({
          position: position,
          map,
          animation: google.maps.Animation.DROP,
        })
      );
    }, timeout);
  }
  
  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }