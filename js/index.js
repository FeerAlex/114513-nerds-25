document.addEventListener('DOMContentLoaded', function() {
  var fbBtn = document.querySelector('#feedback');
  var modal = document.querySelector('#modal');
  var modalClose = modal.querySelector('.modal__close');

  fbBtn.addEventListener('click', function() {
    modal.classList.remove('modal--hide');
    modal.classList.add('modal--show');
  });

  modalClose.addEventListener('click', function() {
    modal.classList.remove('modal--show');
    modal.classList.add('modal--hide');
  });

  initMap();
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.939044, lng: 30.3208509},
    zoom: 17,
    disableDefaultUI: true,
    styles: [
      {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [{'color': '#444444'}],
      },
      {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [{'color': '#f2f2f2'}],
      },
      {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [{'visibility': 'off'}],
      },
      {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [{'saturation': -100},{'lightness': 45}],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [{'visibility': 'simplified'}],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [{'color': '#d6d6d6'}],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [{'visibility': 'off'}],
      },
      {
        'featureType': 'road.local',
        'elementType': 'geometry.fill',
        'stylers': [{'color': '#e6e6e6'}],
      },
      {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [{'visibility': 'off'}],
      },
      {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [{'color': '#86a77a'},{'visibility': 'on'}],
      },
    ],
  });

  var marker = new google.maps.Marker({
    position: {lat: 59.938722, lng: 30.323050},
    map: map,
    title: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
    icon: '../img/pictures/map-marker.png',
    // scaledSize: new google.maps.Size(25, 25),
  });
}