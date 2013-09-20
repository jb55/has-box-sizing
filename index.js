// from jquery/src/support.js

function swap(elem, options, cb) {
  var ret, name, old = {};

  // Remember the old values, and insert the new ones
  for (name in options) {
    old[name] = elem.style[name];
    elem.style[name] = options[name];
  }

  ret = callback(elem);

  // Revert the old values
  for (name in options) {
    elem.style[name] = old[name];
  }

  return ret;
};


module.exports = (function() {
  var body = document.getElementsByTagName("body")[0];
  var div = document.createElement("div");
  var hasBoxSizing = false;
  if (!body) return false;

  var container = document.createElement("div");
  container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

  // Check box-sizing and margin behavior.
  body.appendChild(container).appendChild( div );
  div.innerHTML = "";
  // Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
  div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
      
  swap(body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
    hasBoxSizing = div.offsetWidth === 4;
  });

  body.removeChild( container );
  return hasBoxSizing;
})();
