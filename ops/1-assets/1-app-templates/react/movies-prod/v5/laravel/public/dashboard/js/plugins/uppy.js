(function () {
  "use strict";
var uppy = new Uppy.Core()
    .use(Uppy.Dashboard, {
      inline: true,
      width: 1148,
      target: '#drag-drop-area'
    })
    .use(Uppy.Tus, {endpoint: 'https://tusd.tusdemo.net/files/'})

    uppy.on('complete', (result) => {
      console.log('Upload complete! We’ve uploaded these files:', result.successful)
    })

  })(jQuery);

     