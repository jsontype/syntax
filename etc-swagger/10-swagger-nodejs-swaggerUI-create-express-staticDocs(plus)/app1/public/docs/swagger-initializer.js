window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "http://localhost:3000/docs/swagger.yaml",
    // ↑ app.js에서 static('public') 함수를 썼으므로, 기본이 public 폴더를 바라보게 되어있음. 
    // ↑ http를 쓰는 이유는, SSL 인증서를 넣지 않았으므로 https를 쓰지 못해서임.
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
