<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Slides only</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#carousel-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="carousel-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="slides-only" class="text-white"><code>
&#x3C;div id=&#x22;carouselExampleSlidesOnly&#x22; class=&#x22;carousel slide&#x22; data-ride=&#x22;carousel&#x22;&#x3E;
   &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;
      &#x3C;div class=&#x22;carousel-item active&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                           <div class="carousel-item active">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Slides With Controls</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#carousel-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="carousel-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="slids-with-control" class="text-white"><code>
&#x3C;div id=&#x22;carouselExampleControls&#x22; class=&#x22;carousel slide&#x22; data-ride=&#x22;carousel&#x22;&#x3E;
   &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;
      &#x3C;div class=&#x22;carousel-item active&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;a class=&#x22;carousel-control-prev&#x22; href=&#x22;#carouselExampleControls&#x22; role=&#x22;button&#x22; data-slide=&#x22;prev&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-prev-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Previous&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
   &#x3C;a class=&#x22;carousel-control-next&#x22; href=&#x22;#carouselExampleControls&#x22; role=&#x22;button&#x22; data-slide=&#x22;next&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-next-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Next&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                           <div class="carousel-item active">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Slides With Indicators</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#carousel-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="carousel-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="slides-with-indicators" class="text-white"><code>
&#x3C;div id=&#x22;carouselExampleIndicators&#x22; class=&#x22;carousel slide&#x22; data-ride=&#x22;carousel&#x22;&#x3E;
   &#x3C;ol class=&#x22;carousel-indicators&#x22;&#x3E;
      &#x3C;li data-target=&#x22;#carouselExampleIndicators&#x22; data-slide-to=&#x22;0&#x22; class=&#x22;active&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;li data-target=&#x22;#carouselExampleIndicators&#x22; data-slide-to=&#x22;1&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;li data-target=&#x22;#carouselExampleIndicators&#x22; data-slide-to=&#x22;2&#x22;&#x3E;&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
   &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;
      &#x3C;div class=&#x22;carousel-item active&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;a class=&#x22;carousel-control-prev&#x22; href=&#x22;#carouselExampleIndicators&#x22; role=&#x22;button&#x22; data-slide=&#x22;prev&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-prev-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Previous&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
   &#x3C;a class=&#x22;carousel-control-next&#x22; href=&#x22;#carouselExampleIndicators&#x22; role=&#x22;button&#x22; data-slide=&#x22;next&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-next-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Next&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                           <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                           <div class="carousel-item active">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Slides With Captions</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#carousel-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="carousel-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="slides-with-captions" class="text-white"><code>
&#x3C;div id=&#x22;carouselExampleCaptions&#x22; class=&#x22;carousel slide&#x22; data-ride=&#x22;carousel&#x22;&#x3E;
   &#x3C;ol class=&#x22;carousel-indicators&#x22;&#x3E;
      &#x3C;li data-target=&#x22;#carouselExampleCaptions&#x22; data-slide-to=&#x22;0&#x22; class=&#x22;active&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;li data-target=&#x22;#carouselExampleCaptions&#x22; data-slide-to=&#x22;1&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;li data-target=&#x22;#carouselExampleCaptions&#x22; data-slide-to=&#x22;2&#x22;&#x3E;&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
   &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;
      &#x3C;div class=&#x22;carousel-item active&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
         &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
            &#x3C;h4 class=&#x22;text-white&#x22;&#x3E;First slide label&#x3C;/h4&#x3E;
            &#x3C;p&#x3E;Nulla vitae elit libero, a pharetra augue mollis interdum.&#x3C;/p&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
         &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
            &#x3C;h4 class=&#x22;text-white&#x22;&#x3E;Second slide label&#x3C;/h4&#x3E;
            &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x3C;/p&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
         &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
            &#x3C;h4 class=&#x22;text-white&#x22;&#x3E;Third slide label&#x3C;/h4&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur.&#x3C;/p&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;a class=&#x22;carousel-control-prev&#x22; href=&#x22;#carouselExampleCaptions&#x22; role=&#x22;button&#x22; data-slide=&#x22;prev&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-prev-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Previous&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
   &#x3C;a class=&#x22;carousel-control-next&#x22; href=&#x22;#carouselExampleCaptions&#x22; role=&#x22;button&#x22; data-slide=&#x22;next&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-next-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Next&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
&#x3C;/div&#x3E;x3E;
   &#x3C;/div&#x3E;
   &#x3C;a class=&#x22;carousel-control-prev&#x22; href=&#x22;#carouselExampleCaptions&#x22; role=&#x22;button&#x22; data-slide=&#x22;prev&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-prev-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Previous&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
   &#x3C;a class=&#x22;carousel-control-next&#x22; href=&#x22;#carouselExampleCaptions&#x22; role=&#x22;button&#x22; data-slide=&#x22;next&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-next-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Next&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                     <div class="bd-example">
                        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                           <ol class="carousel-indicators">
                              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                           </ol>
                           <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                                 <div class="carousel-caption d-none d-md-block">
                                    <h4 class="text-white">First slide label</h4>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                 </div>
                              </div>
                              <div class="carousel-item">
                                 <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                                 <div class="carousel-caption d-none d-md-block">
                                    <h4 class="text-white">Second slide label</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                              <div class="carousel-item">
                                 <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                                 <div class="carousel-caption d-none d-md-block">
                                    <h4 class="text-white">Third slide label</h4>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                 </div>
                              </div>
                           </div>
                           <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span class="sr-only">Previous</span>
                           </a>
                           <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
                           <span class="sr-only">Next</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Slides With Crossfade</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#carousel-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="carousel-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="slides-with-crosfade" class="text-white"><code>
&#x3C;div id=&#x22;carouselExampleFade&#x22; class=&#x22;carousel slide carousel-fade&#x22; data-ride=&#x22;carousel&#x22;&#x3E;
   &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;
      &#x3C;div class=&#x22;carousel-item active&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}} &#x22; class=&#x22;d-block w-100&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;a class=&#x22;carousel-control-prev&#x22; href=&#x22;#carouselExampleFade&#x22; role=&#x22;button&#x22; data-slide=&#x22;prev&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-prev-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Previous&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
   &#x3C;a class=&#x22;carousel-control-next&#x22; href=&#x22;#carouselExampleFade&#x22; role=&#x22;button&#x22; data-slide=&#x22;next&#x22;&#x3E;
   &#x3C;span class=&#x22;carousel-control-next-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
   &#x3C;span class=&#x22;sr-only&#x22;&#x3E;Next&#x3C;/span&#x3E;
   &#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                     <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                           <div class="carousel-item active">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                           <div class="carousel-item">
                              <img src="{{URL::asset("dashboard/images/small/img-1.jpg")}} " class="d-block w-100" alt="#">
                           </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
