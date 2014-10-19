var feed = new Instafeed({
  clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
  limit: 200,
  sortBy: 'most-recent',
  locationId: '514276',
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
});
feed.run();