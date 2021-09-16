// carousel calling to the Maps section

const button1 = document.querySelector("#button-visit");
const section1 = document.querySelector("#section-first");

button1.addEventListener("click", function() {
    section1.style.display = 'block';
});

const button2 = document.querySelector("#button-accomodation");
const section2 = document.querySelector("#section-second");

button2.addEventListener("click", function() {
    section2.style.display = 'block';
});

const button3 = document.querySelector("#button-eating");
const section3 = document.querySelector("#section-third");

button3.addEventListener("click", function() {
    section3.style.display = 'block';
});

const button4 = document.querySelector("#button-shopping");
const section4 = document.querySelector("#section-fourth");

button4.addEventListener("click", function() {
    section4.style.display = 'block';
});

// Maps

  let map;
  let markers = [];

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 40.965320, lng: -5.663970
      },
    });
  }

  function drop (locationsArray) {
    clearMarkers();

    for (let i = 0; i < locationsArray.length; i++) {
      addMarkerWithTimeout(locationsArray[i], i * 200);
    }
  }

  const neighborhoods = [
    { lat: 40.965149,lng: -5.664018},
    { lat: 40.960623,lng: -5.665958},
    { lat: 40.961170,lng: -5.667384},
    { lat: 40.959500,lng: -5.666869},
  ];

  const courses = [
    {lat:40.95930910851654,lng:-5.664276601998882},
    {lat:40.96190511988269,lng:-5.664655045808949},
    {lat:40.9682130931584,lng:-5.662928448178994},
    {lat:40.962461614807836,lng:-5.668240661153844},
  ];

  const restaurants = [
    {lat:40.96509390980714,lng:-5.664981301627838},
    {lat:40.964621452006284,lng:-5.663662463570259},
    {lat:40.96397752390836, lng:-5.663691715119163},
    {lat:40.963378317578915, lng:-5.663929943955393},
  ];

  const shops = [
    {lat:40.96913272921676, lng:-5.663256033514494},
    {lat:40.96750205888643, lng:-5.660756909078403},
    {lat:40.96609649834784, lng:-5.6629401000497515},
    {lat:40.96654758568129, lng:-5.662473953700304}

  ]

const neighborhoodButton = document.querySelector(".btn-neighborhoods")

neighborhoodButton.addEventListener("click", () => {
  drop(neighborhoods);
});

const courseButton = document.querySelector(".btn-courses")

courseButton.addEventListener("click", () => {
  drop(courses);
});

const eatingButton = document.querySelector(".btn-eating")

eatingButton.addEventListener("click", () => {
  drop(restaurants);
});

const shopButton = document.querySelector(".btn-shops")

shopButton.addEventListener("click", () => {
  drop(shops);
});


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