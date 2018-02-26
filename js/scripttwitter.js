// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.

//More examples can be found at: https://github.com/jasonmayes/Twitter-Post-Fetcher
var configAlex_Coghlan98 = {
  "profile": {"screenName": 'Alex_Coghlan98'},
  "id": '1925930010',
  "domId": 'MyTwitterFeed',
  "maxTweets": 15,
  "enableLinks": true,
  "showImages": false
};
twitterFetcher.fetch(configAlex_Coghlan98);


var configTagged = {
  "id": '967001720927682560',
  "domId": 'example2',
  "maxTweets": 5,
  "enableLinks": true,
  "showImages": false,
  "customCallback": handleTweets //This will call the function that we have declared below, to handle the layout that the tweets are displayed as
};
twitterFetcher.fetch(configTagged);

var configTagged = {
  "id": '966988056459907072',
  "domId": 'example3',
  "maxTweets": 5,
  "enableLinks": true,
  "showImages": false
};
twitterFetcher.fetch(configTagged);

var configTagged = {
  "id": '963082944813334531',
  "domId": 'example4',
  "maxTweets": 5,
  "enableLinks": true,
  "showImages": false
};
twitterFetcher.fetch(configTagged);

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example2');
    var html = '<div class="container"><div class="row row-eq-height mb-5">';
    while(n < x) {
      html += '<div class="col-4">' + tweets[n] + '</div>';
      n++;
    }
    html += '</div></div>';
    element.innerHTML = html;
}

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example3');
    var html = '<div class="container"><div class="row row-eq-height mb-5">';
    while(n < x) {
      html += '<div class="col-4">' + tweets[n] + '</div>';
      n++;
    }
    html += '</div></div>';
    element.innerHTML = html;
}

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example4');
    var html = '<div class="container"><div class="row row-eq-height mb-5">';
    while(n < x) {
      html += '<div class="col-4">' + tweets[n] + '</div>';
      n++;
    }
    html += '</div></div>';
    element.innerHTML = html;
}
