// carousel calling to the Maps section

const button1 = document.querySelector("#button-visit");
const section1 = document.querySelector("#section-first");

button1.addEventListener("click", function() {
    section1.style.display = 'block';
})

const button2 = document.querySelector("#button-accomodation");
const section2 = document.querySelector("#section-second");

button2.addEventListener("click", function() {
    section2.style.display = 'block';
})

const button3 = document.querySelector("#button-eating");
const section3 = document.querySelector("#section-third");

button3.addEventListener("click", function() {
    section3.style.display = 'block';
})

const button4 = document.querySelector("#button-shopping");
const section4 = document.querySelector("#section-fourth");

button4.addEventListener("click", function() {
    section4.style.display = 'block';
})

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
      zoom: 15,
      center: { lat: 40.965320, lng: -5.663970 },
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