window.onload = function() {

  // Trying to keep the JS on the light side, so no libraries are used here.
  // This is simple, non-critical stuff.

  // The capitalize function capitalizes a string - something easily done in css,
  // but in this case we need to do it before we fix some category names. 

  String.prototype.capitalize = function(all) {
    if (all) {
       return this.split(' ').map(function(e){return e.capitalize();}).join(' ');    
    } else {
         return this.charAt(0).toUpperCase() + this.slice(1);
    } 
  }

  //Remove spaces from last names containing Mc, Mac and O' that need to be camel-case
  
  try {
    var names = document.getElementsByClassName('category-name');
    var len = names.length;

    for (var i = 0; i < len; i++) {

      var name = names[i].innerHTML;
      name = name.capitalize(true);
      names[i].innerHTML = name;
      console.log(name)
      if (name.indexOf('Jquery') >= 0) {
        names[i].innerHTML = name.replace('Jquery', 'jQuery');
        continue;

      } else if (name.indexOf('Javascript') >= 0) {
        names[i].innerHTML = name.replace('Javascript', 'JavaScript');
        continue;

      } else if (name.indexOf('Wordpress') >= 0) {
        names[i].innerHTML = name.replace('Wordpress' , 'WordPress');
        continue;

      } else if (name.indexOf('Angularjs') >= 0) {
          names[i].innerHTML = name.replace('Angularjs' , 'AngularJS');
          continue;
      }
    }
  } catch(e) {
    console.log(e);
  };

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
