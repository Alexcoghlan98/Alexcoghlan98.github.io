var feed = new Instafeed({
  get: 'user',
  userId: '1351074700',
  accessToken: '1351074700.1677ed0.9575c4100e1241e097635780e95824a8',
  //template: '<video width="320" height="240" controls><source src={{}}></video>',
  template: '<a class="animation" href="{{link}}"><img src="{{image}}"/></a> <p>{{likes}}</p> <p>{{caption}}</p> <p>{{location}}</p>',
  sortBy: 'most-liked',
  resolution: 'standard_resolution',
  limit: '60'
});
feed.run();
