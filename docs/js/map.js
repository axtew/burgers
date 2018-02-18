ymaps.ready(init);
var myMap,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3,
    myPlacemark4;

function init(){
  myMap = new ymaps.Map("map__cont", {
    center: [59.905048, 30.404898],
    zoom: 11
  });

  var myPlacemark1 = new ymaps.Placemark([59.896134, 30.424618], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [90, 60]
  });

  var myPlacemark2 = new ymaps.Placemark([59.902243, 30.295652], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [90, 60]
  });

  var myPlacemark3 = new ymaps.Placemark([59.925030, 30.453156], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [90, 60]
  });

  var myPlacemark4 = new ymaps.Placemark([59.964645, 30.304840], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [90, 60]
  });

  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.geoObjects.add(myPlacemark3);
  myMap.geoObjects.add(myPlacemark4);

  myMap.controls.remove('typeSelector');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('fullscreenControl');

  myMap.behaviors.disable('scrollZoom');

  //на мобильных устройствах... (проверяем по userAgent браузера)
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    myMap.behaviors.disable('drag');
  }
}
