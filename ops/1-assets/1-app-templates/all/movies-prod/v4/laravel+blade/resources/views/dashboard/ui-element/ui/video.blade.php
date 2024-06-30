<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
           <div class="col-sm-12 col-lg-6 col-md-6">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Embeds Video</h4>
                    </div>
                 <div class="header-action">
                          <i  type="button" data-toggle="collapse" data-target="#video-1" aria-expanded="false" aria-controls="alert-1">
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                             </svg>
                          </i>
                       </div>
                 </div>
                 <div class="iq-card-body">
                    <div class="collapse" id="video-1">
                          <div class="iq-card"><kbd class="bg-dark"><pre id="embeds-video" class="text-white"><code>
&#x3C;div class=&#x22;embed-responsive embed-responsive-16by9&#x22;&#x3E;
  &#x3C;iframe class=&#x22;embed-responsive-item&#x22; src=&#x22;https://www.youtube.com/embed/zpOULjyy-n8?rel=0&#x22; allowfullscreen&#x3E;&#x3C;/iframe&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                       </div>
                    <p>Wrap any embed like an <code class="highlighter-rouge">&lt;iframe&gt;</code> in a parent element with <code class="highlighter-rouge">.embed-responsive</code> and an aspect ratio. The <code class="highlighter-rouge">.embed-responsive-item</code> isn’t strictly required, but we encourage it.</p>
                    <div class="embed-responsive embed-responsive-16by9">
                       <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Responsive Aspect ratios 4:3</h4>
                    </div>
                 <div class="header-action">
                          <i  type="button" data-toggle="collapse" data-target="#video-2" aria-expanded="false" aria-controls="alert-1">
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                             </svg>
                          </i>
                       </div>
                 </div>
                 <div class="iq-card-body">
                    <div class="collapse" id="video-2">
                          <div class="iq-card"><kbd class="bg-dark"><pre id="responsive-aspect-4-3" class="text-white"><code>
&#x3C;div class=&#x22;embed-responsive embed-responsive-4by3&#x22;&#x3E;
  &#x3C;iframe class=&#x22;embed-responsive-item&#x22; src=&#x22;https://www.youtube.com/embed/zpOULjyy-n8?rel=0&#x22; allowfullscreen&#x3E;&#x3C;/iframe&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                       </div>
                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                    <!-- 4:3 aspect ratio -->
                    <div class="embed-responsive embed-responsive-4by3">
                       <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                 </div>
              </div>
           </div>
           <div class="col-sm-12 col-lg-6 col-md-6">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Responsive Aspect ratios 21:9</h4>
                    </div>
                <div class="header-action">
                          <i  type="button" data-toggle="collapse" data-target="#video-3" aria-expanded="false" aria-controls="alert-1">
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                             </svg>
                          </i>
                       </div>
                 </div>
                 <div class="iq-card-body">
                    <div class="collapse" id="video-3">
                          <div class="iq-card"><kbd class="bg-dark"><pre id="responsive-aspect-21-9" class="text-white"><code>
&#x3C;div class=&#x22;embed-responsive embed-responsive-21by9&#x22;&#x3E;
  &#x3C;iframe class=&#x22;embed-responsive-item&#x22; src=&#x22;https://www.youtube.com/embed/zpOULjyy-n8?rel=0&#x22; allowfullscreen&#x3E;&#x3C;/iframe&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                       </div>
                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                    <!-- 21:9 aspect ratio -->
                    <div class="embed-responsive embed-responsive-21by9">
                       <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Responsive Aspect ratios 1:1</h4>
                    </div>
                 <div class="header-action">
                          <i  type="button" data-toggle="collapse" data-target="#video-4" aria-expanded="false" aria-controls="alert-1">
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                             </svg>
                          </i>
                       </div>
                 </div>
                 <div class="iq-card-body">
                    <div class="collapse" id="video-4">
                          <div class="iq-card"><kbd class="bg-dark"><pre id="responsive-aspect-1-1" class="text-white"><code>
&#x3C;div class=&#x22;embed-responsive embed-responsive-1by1&#x22;&#x3E;
  &#x3C;iframe class=&#x22;embed-responsive-item&#x22; src=&#x22;https://www.youtube.com/embed/zpOULjyy-n8?rel=0&#x22; allowfullscreen&#x3E;&#x3C;/iframe&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                       </div>
                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                    <!-- 1:1 aspect ratio -->
                    <div class="embed-responsive embed-responsive-1by1">
                       <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
</x-layouts.dashboard>