<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Breadcrumb</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#breadcrumb-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="breadcrumb-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="breadcrumb" class="text-white"><code>
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Home&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Library&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Data&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code></p>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="#">Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="#">Home</a></li>
                           <li class="breadcrumb-item"><a href="#">Library</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#breadcrumb-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="breadcrumb-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="breadcrumb-with-icons" class="text-white"><code>
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Library&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Data&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code> with Icon</p>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item align-items-center active" aria-current="page"><i class="ri-home-4-line mr-2 float-left"></i>Home</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="#" class=" align-items-center"><i class="ri-home-4-line pt-1 mr-2 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="#"><i class="ri-home-4-line pt-1 mr-2 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item"><a href="#">Library</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Breadcrumb</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#breadcrumb-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="breadcrumb-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="breadcrumb2" class="text-white"><code>
&#x3C;nav aria-label=&#x22;breadcrumb &#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb bg-primary&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active text-white&#x22; aria-current=&#x22;page&#x22;&#x3E;Home&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb bg-primary&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-white&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active text-white&#x22; aria-current=&#x22;page&#x22;&#x3E;Library&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb bg-primary mb-0&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-white&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-white&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active text-white&#x22; aria-current=&#x22;page&#x22;&#x3E;Data&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>use class <code>.breadcrumb .bg-primary</code></p>
                     <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb bg-primary">
                           <li class="breadcrumb-item active text-white" aria-current="page">Home</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-primary">
                           <li class="breadcrumb-item"><a href="#" class="text-white">Home</a></li>
                           <li class="breadcrumb-item active text-white" aria-current="page">Library</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-primary mb-0">
                           <li class="breadcrumb-item"><a href="#" class="text-white">Home</a></li>
                           <li class="breadcrumb-item"><a href="#" class="text-white">Library</a></li>
                           <li class="breadcrumb-item active text-white" aria-current="page">Data</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#breadcrumb-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="breadcrumb-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="breadcrumb-with-icon2" class="text-white"><code>
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb bg-primary&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active text-white&#x22; aria-current=&#x22;page&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb bg-primary&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-white&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active text-white&#x22; aria-current=&#x22;page&#x22;&#x3E;Library&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb bg-primary mb-0&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-white&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-white&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active text-white&#x22; aria-current=&#x22;page&#x22;&#x3E;Data&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>use class <code>.breadcrumb .bg-primary </code> With Icon.</p>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-primary">
                           <li class="breadcrumb-item active text-white" aria-current="page"><i class="ri-home-4-line mr-1 float-left"></i>Home</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-primary">
                           <li class="breadcrumb-item"><a href="#" class="text-white"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item active text-white" aria-current="page">Library</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-primary mb-0">
                           <li class="breadcrumb-item"><a href="#" class="text-white"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item"><a href="#" class="text-white">Library</a></li>
                           <li class="breadcrumb-item active text-white" aria-current="page">Data</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#breadcrumb-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="breadcrumb-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="breadcrumb3" class="text-white"><code>
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb iq-bg-primary&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb iq-bg-primary&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Library&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb iq-bg-primary mb-0&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Data&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>use class <code>.breadcrumb .iq-bg-primary</code></p>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb iq-bg-primary">
                           <li class="breadcrumb-item active" aria-current="page"><i class="ri-home-4-line mr-1 float-left"></i>Home</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb iq-bg-primary">
                           <li class="breadcrumb-item"><a href="#"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb iq-bg-primary mb-0">
                           <li class="breadcrumb-item"><a href="#"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item"><a href="#">Library</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#breadcrumb-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="breadcrumb-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="breadcrumb-with-icon3" class="text-white"><code>
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb iq-bg-danger&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb iq-bg-danger&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-danger&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Library&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
&#x3C;nav aria-label=&#x22;breadcrumb&#x22;&#x3E;
   &#x3C;ol class=&#x22;breadcrumb iq-bg-danger mb-0&#x22;&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-danger&#x22;&#x3E;&#x3C;i class=&#x22;ri-home-4-line mr-1 float-left&#x22;&#x3E;&#x3C;/i&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item&#x22;&#x3E;&#x3C;a href=&#x22;#&#x22; class=&#x22;text-danger&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;breadcrumb-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;Data&#x3C;/li&#x3E;
   &#x3C;/ol&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>use class <code>.breadcrumb .iq-bg-danger</code></p>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb iq-bg-danger">
                           <li class="breadcrumb-item active" aria-current="page"><i class="ri-home-4-line mr-1 float-left"></i>Home</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb iq-bg-danger">
                           <li class="breadcrumb-item"><a href="#" class="text-danger"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                     </nav>
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb iq-bg-danger mb-0">
                           <li class="breadcrumb-item"><a href="#" class="text-danger"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                           <li class="breadcrumb-item"><a href="#" class="text-danger">Library</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
