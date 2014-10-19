
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
 template: '<a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}"/><div class="likes">&hearts; {{likes}}</div></a>'
});
feed.run();