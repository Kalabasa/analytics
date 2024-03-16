(function () {
  if (document.currentScript && document.currentScript.dataset.prefix) {
    if (location.hash.includes('debugAnalytics')) {
      console.log(document.currentScript);
      console.log(document.currentScript.dataset);
      console.log(document.currentScript.dataset.prefix);
      alert(document.currentScript.dataset.prefix);
    }
    window.goatcounter = window.goatcounter || {};
    window.goatcounter.path = function (p) {
      if (location.hash.includes('debugAnalytics')) {
        console.log(document.currentScript.dataset.prefix + p);
      }
      return document.currentScript.dataset.prefix + p;
    };
  }
  var script = document.createElement('script');
  script.dataset.goatcounter = 'https://kalabasa.goatcounter.com/count';
  script.async = true;
  script.setAttribute('src', '//gc.zgo.at/count.js');
  document.head.appendChild(script);
})();
