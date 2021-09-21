/** Carousel buttons linking to the Maps section */

const BUTTON_VISIT = document.querySelector("#button-visit");
const SECTION_FIRST = document.querySelector("#section-first");
const BUTTON_COURSE = document.querySelector("#button-courses");
const SECTION_SECOND = document.querySelector("#section-second");
const BUTTON_EATING = document.querySelector("#button-eating");
const SECTION_THIRD = document.querySelector("#section-third");
const BUTTON_SHOPPING = document.querySelector("#button-shopping");
const SECTION_FOURTH = document.querySelector("#section-fourth");


BUTTON_VISIT.addEventListener("click", function () {
  hideAllSections();
  SECTION_FIRST.style.display = 'block';
});

BUTTON_COURSE.addEventListener("click", function () {
  hideAllSections();
  SECTION_SECOND.style.display = 'block';
});

BUTTON_EATING.addEventListener("click", function () {
  hideAllSections();
  SECTION_THIRD.style.display = 'block';
});

BUTTON_SHOPPING.addEventListener("click", function () {
  hideAllSections();
  SECTION_FOURTH.style.display = 'block';
});

function hideAllSections() {
  document.querySelector("#section-first").style.display = 'none';
  document.querySelector("#section-second").style.display = 'none';
  document.querySelector("#section-third").style.display = 'none';
  document.querySelector("#section-fourth").style.display = 'none';
}

/** Google Maps*/

const NEIGHBORHOODS = [{
    lat: 40.965149,
    lng: -5.664018
  },
  {
    lat: 40.960623,
    lng: -5.665958
  },
  {
    lat: 40.961170,
    lng: -5.667384
  },
  {
    lat: 40.959500,
    lng: -5.666869
  },
];

const COURSES = [{
    lat: 40.95930910851654,
    lng: -5.664276601998882
  },
  {
    lat: 40.96190511988269,
    lng: -5.664655045808949
  },
  {
    lat: 40.9682130931584,
    lng: -5.662928448178994
  },
  {
    lat: 40.962461614807836,
    lng: -5.668240661153844
  },
];

const RESTAURANTS = [{
    lat: 40.96509390980714,
    lng: -5.664981301627838
  },
  {
    lat: 40.964621452006284,
    lng: -5.663662463570259
  },
  {
    lat: 40.96397752390836,
    lng: -5.663691715119163
  },
  {
    lat: 40.963378317578915,
    lng: -5.663929943955393
  },
];

const SHOPS = [{
    lat: 40.96913272921676,
    lng: -5.663256033514494
  },
  {
    lat: 40.96750205888643,
    lng: -5.660756909078403
  },
  {
    lat: 40.96609649834784,
    lng: -5.6629401000497515
  },
  {
    lat: 40.96654758568129,
    lng: -5.662473953700304
  }

];

let map;
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {
      lat: 40.965320,
      lng: -5.663970
    },
  });
}

function drop(locationsArray) {
  clearMarkers();

  for (let i = 0; i < locationsArray.length; i++) {
    addMarkerWithTimeout(locationsArray[i], i * 200);
  }
}

/* Markers clusters dropping into the map*/

const NEIGHBORHOOD_BUTTON = document.querySelector(".btn-neighborhoods");
const COURSE_BUTTON = document.querySelector(".btn-courses");
const EATING_BUTTON = document.querySelector(".btn-eating");
const SHOP_BUTTON = document.querySelector(".btn-shops");

NEIGHBORHOOD_BUTTON.addEventListener("click", () => {
  drop(NEIGHBORHOODS);
});

COURSE_BUTTON.addEventListener("click", () => {
  drop(COURSES);
});

EATING_BUTTON.addEventListener("click", () => {
  drop(RESTAURANTS);
});

SHOP_BUTTON.addEventListener("click", () => {
  drop(SHOPS);
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