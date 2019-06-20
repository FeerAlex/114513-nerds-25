if (typeof NodeList.prototype.forEach !== 'function')  {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var fbBtn = document.querySelector('#feedback');
var modal = document.querySelector('#modal');
var modalClose = modal.querySelector('.modal__close');
var form = modal.querySelector('.form');
var fio = form.querySelector("[name=fio]");
var email = form.querySelector("[name=email]");
var text = form.querySelector("[name=text]");
var isStorageSupport = true;
var storage = "";

try {
  var data = localStorage.getItem("data");
  storage = JSON.parse(data);
} catch (err) {
  isStorageSupport = false;
}

fbBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('modal--show');

  if (storage) {
    fio.value = storage.fio;
    email.value = storage.email;
    text.focus();
  } else {
    fio.focus();
  }

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      e.preventDefault();

      if (modal.classList.contains('modal--show')) {
        closeModal();
      }
    }
  });
});

modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
});

modalClose.addEventListener('click', function (e) {
  e.preventDefault();
  closeModal();
});

form.addEventListener('submit', function (e) {
  if (validate(form)) {
    if (isStorageSupport) {
      var data = JSON.stringify({
        fio: fio.value,
        email: email.value
      });
      localStorage.setItem("data", data);
    }
  } else {
    modal.classList.remove('modal--error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal--error');
  }
});

ymaps.ready(initMap);

function closeModal() {
  clearForm(form);
  modal.classList.remove('modal--show');
  fbBtn.focus();
}

function validate(form) {
  var elements = form.querySelectorAll('input, textarea');
  var valid = true;

  elements.forEach(function (item, i) {
    if (item.value.length === 0) {
      item.classList.add('ipt__field--error');
      valid = false;
    }

    item.addEventListener('keydown', function (e) {
      this.classList.remove('ipt__field--error');
    });
  });
  
  return valid;
}

function clearForm(form) {
  var elements = form.querySelectorAll('input, textarea');

  elements.forEach(function (item, i) {
    item.classList.remove('ipt__field--error');
  });

  modal.classList.remove('modal--error');
  form.reset();
}

function initMap() {
  var myMap = new ymaps.Map('map', {
    center: [59.939099, 30.321523],
    zoom: 17
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
  myMap.controls.remove('default').remove('rulerControl');
  myMap.geoObjects.add(myPlacemark);
}
