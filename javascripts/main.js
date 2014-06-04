Modernizr.prefixed('requestAnimationFrame', window);

$(document).ready(function() {
  var windowHeight = $(window).height(),
      windowWidth = $(window).width(),
      video = $('#video'),
      videoBackground = $('#video-bg'),
      content = $('.content');

  updateVideo = function(width, height) {
    videoBackground.css('height', windowHeight);
    // if (width >= height) {
    //   video.css('width', width).css('height', 'auto');
    //   video.css('top', -1 * (width - height) / 2 + 'px').css('left', '0px');
    //   content.css('top', height + 'px');
    // } else {
    //   video.css('height', height).css('width', 'auto');
    //   video.css('top', '0px').css('left', -1 * (height - width) / 2 + 'px');
    //   content.css('top', height + 'px');
    // }
    video.css('height', height).css('width', 'auto');
    video.css('top', '0px').css('left', -1 * ($('#video').width() - width) / 2 + 'px');
    content.css('top', height + 'px');
    if (width >= $('#video').width()) {
      video.css('width', width).css('height', 'auto');
      video.css('top', -1 * ($('#video').height() - height) / 2 + 'px').css('left', '0px');
      content.css('top', height + 'px');
    }
  }
  updateVideo(windowWidth, windowHeight);



  $(window).on('resize', function() {
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    updateVideo(windowWidth, windowHeight);
  });


  console.log('loading Map')
  var deansoft = new google.maps.LatLng(25.080023, 121.569049);
  var mapOptions = {
    zoom: 15,
    center: deansoft,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  google.maps.event.addListener(map, 'click', function(event) {
    map.panTo(event.latLng);
  });

  setTimeout(function() {
    var marker = new google.maps.Marker({
        position: deansoft,
        map: map,
        title: 'Taipei',
        animation: google.maps.Animation.DROP
    });
  }, 3000);


  function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'click',
        animation: google.maps.Animation.DROP
    });
    map.panTo(marker.getPosition());
  }

  
});