document.addEventListener('DOMContentLoaded', function() {
  var fbBtn = document.querySelector('#feedback');
  var modal = document.querySelector('#modal');
  var modalClose = modal.querySelector('.modal__close');

  fbBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('modal--show');
  });

  modalClose.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('modal--show');
  });

  ymaps.ready(init);

  function init(){    
    var myMap = new ymaps.Map("map", {
      center: [59.939099, 30.321523],
      zoom: 17,
    });

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'NЁRDS DESIGN STUDIO',
      balloonContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pictures/map-marker.png',
      iconImageSize: [231, 190],
      iconImageOffset: [-40, -220]
    });
    
    myMap.behaviors.disable(['drag', 'scrollZoom']);

    myMap.controls
      .remove('default')
      .remove('rulerControl');
      
    myMap.geoObjects.add(myPlacemark);
  }
});