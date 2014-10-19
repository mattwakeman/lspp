
var feed = new Instafeed({
  get: 'tagged',
  tagName: 'mwiththeat',
  clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
  limit: 20,
  sortBy: 'most-liked',
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },
  //template: '<a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}"/><div class="likes">&hearts; {{likes}}</div></a>'

  template: '<div><a href="{{link}}" target="_blank"><img src="{{image}} alt="{{caption}}" /></a><h2>{{caption}}</h2>&hearts; {{likes}}</div>'
});
feed.run();