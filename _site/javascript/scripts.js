window.onload = function() {

  // Here's a little style manipulation to move the footer down if the content
  // doesn't fill the page height. Not super critical, but it looks better.
  
  // First (reliably) get the viewport size (no jQuery) - thank's Stack Overflow:
  // http://stackoverflow.com/questions/3437786/how-to-get-web-page-size-browser-window-size-screen-size-in-a-cross-browser-wa

  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = w.innerHeight|| e.clientHeight|| g.clientHeight;

  // If our viewport is greater than our mobile break point, then do stuff:

  if (width > 767) {
    var footerHeight = 58;
    var content = document.getElementById('content');
    var contentHeight = content.offsetHeight;

    var minHeight = height - footerHeight;

    if (contentHeight < minHeight) {
      var minHeightPixels = 'height:' + minHeight + 'px';
      content.setAttribute('style', minHeightPixels);
    }
  }
};
