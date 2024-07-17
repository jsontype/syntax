(function () {
  "use strict";

// quill
if (jQuery("#editor").length) {
  if(typeof Quill !== typeof undefined) {
    const quill = new Quill('#editor', {
      theme: 'snow'
    });
  }
}

})();