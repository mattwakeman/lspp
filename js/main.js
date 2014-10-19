
var feed = new Instafeed({
  get: 'tagged',
  tagName: 'mwiththeat',
  clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
  limit: 100,
  //sortBy: 'most-liked',
  //after: function () {
    //var images = $("#instafeed").find('a');
    //});
  //},
  template: '<div><a href="{{link}}" target="_blank"><img src="{{image}} alt="{{caption}}"/></a><h2>{{caption}}</h2>&hearts; {{likes}}</div>'
});
feed.run();