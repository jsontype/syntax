<x-layouts.dashboard>
  <div class="container-fluid">
        <div class="row">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                      <div class="iq-header-title">
                        <h4 class="card-title">Badge</h4>
                      </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#badge-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="badge-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="badge" class="text-white"><code>
&#x3C;h1 class=&#x22;&#x22;&#x3E;Example heading &#x3C;span class=&#x22;badge  badge-primary&#x22;&#x3E;New&#x3C;/span&#x3E;&#x3C;/h1&#x3E;
</code></pre></kbd></div>
                        </div>
                      <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>
                      <h1 class="mb-3">Example heading <span class="badge  badge-primary">New</span></h1>
                      <h2 class="mb-3">Example heading <span class="badge badge-secondary">New</span></h2>
                      <h3 class="mb-3">Example heading <span class="badge badge-success">New</span></h3>
                      <h4 class="mb-3">Example heading <span class="badge badge-danger">New</span></h4>
                      <h5 class="mb-3">Example heading <span class="badge badge-warning">New</span></h5>
                      <h6 class="mb-0">Example heading <span class="badge badge-info">New</span></h6>
                  </div>
                </div>
                <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                      <div class="iq-header-title">
                        <h4 class="card-title">Button Badges</h4>
                      </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#badge-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="badge-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="button-badge" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn mb-1 btn-primary&#x22;&#x3E;
  Notifications &#x3C;span class=&#x22;badge badge-light ml-2&#x22;&#x3E;4&#x3C;/span&#x3E;
&#x3C;/button&#x3E;</code></pre></kbd></div>
                        </div>
                      <p>Badges can be used as part of buttons to provide a counter.</p>
                      <button type="button" class="btn mb-1 btn-primary">
                      Notifications <span class="badge badge-light ml-2">4</span>
                      </button>
                      <button type="button" class="btn mb-1 btn-success">
                      Notifications <span class="badge badge-light ml-2">4</span>
                      </button>
                      <button type="button" class="btn mb-1 btn-danger">
                      Notifications <span class="badge badge-light ml-2">4</span>
                      </button>
                  </div>
                </div>
                <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                      <div class="iq-header-title">
                        <h4 class="card-title">Button Light background Badges</h4>
                      </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#badge-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="badge-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="button-light-background-badge" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn mb-1 btn-outline-primary&#x22;&#x3E;
  Notifications &#x3C;span class=&#x22;badge badge-primary ml-2&#x22;&#x3E;4&#x3C;/span&#x3E;
&#x3C;/button&#x3E;</code></pre></kbd></div>
                        </div>
                      <p>Badges can be used as part of buttons to provide a counter.</p>
                      <button type="button" class="btn mb-1 btn-outline-primary">
                      Notifications <span class="badge badge-primary ml-2">4</span>
                      </button>
                      <button type="button" class="btn mb-1 btn-outline-success">
                      Notifications <span class="badge badge-success ml-2">4</span>
                      </button>
                      <button type="button" class="btn mb-1 btn-outline-danger">
                      Notifications <span class="badge badge-danger ml-2">4</span>
                      </button>
                  </div>
                </div>
                <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                      <div class="iq-header-title">
                        <h4 class="card-title">Button Border Badges</h4>
                      </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#badge-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="badge-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="button-border-badge" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn mb-1 bg-primary-light&#x22;&#x3E;
  Notifications &#x3C;span class=&#x22;badge badge-primary ml-2&#x22;&#x3E;4&#x3C;/span&#x3E;
&#x3C;/button&#x3E;</code></pre></kbd></div>
                        </div>
                      <p>Badges can be used as part of buttons to provide a counter.</p>
                      <button type="button" class="btn mb-1 iq-bg-primary">
                      Notifications <span class="badge badge-primary ml-2">4</span>
                      </button>
                      <button type="button" class="btn mb-1 iq-bg-success">
                      Notifications <span class="badge badge-success ml-2">4</span>
                      </button>
                      <button type="button" class="btn mb-1 iq-bg-danger">
                      Notifications <span class="badge badge-danger ml-2">4</span>
                      </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                      <h4 class="card-title">Contextual variations</h4>
                    </div>
                 <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#badge-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="badge-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="contectual-variation" class="text-white"><code>
&#x3C;span class=&#x22; badge badge-primary&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22; badge badge-pill badge-primary&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;a href=&#x22;#&#x22; class=&#x22; badge badge-primary&#x22;&#x3E;Primary&#x3C;/a&#x3E;</code></pre></kbd></div>
                        </div>
                      <p class="">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                      <span class="badge badge-primary">Primary</span>
                      <span class="badge badge-secondary">Secondary</span>
                      <span class="badge badge-success">Success</span>
                      <span class="badge badge-danger">Danger</span>
                      <span class="badge badge-warning">Warning</span>
                      <span class="badge badge-info">Info</span>
                      <span class="badge badge-light">Light</span>
                      <span class="badge badge-dark">Dark</span>
                      <h5 class="card-title mt-4">Pill badges</h5>
                      <p class="">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                      <span class="badge badge-pill badge-primary">Primary</span>
                      <span class="badge badge-pill badge-secondary">Secondary</span>
                      <span class="badge badge-pill badge-success">Success</span>
                      <span class="badge badge-pill badge-danger">Danger</span>
                      <span class="badge badge-pill badge-warning">Warning</span>
                      <span class="badge badge-pill badge-info">Info</span>
                      <span class="badge badge-pill badge-light">Light</span>
                      <span class="badge badge-pill badge-dark">Dark</span>
                      <h5 class="card-title mt-4">Links</h5>
                      <p class="">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                      <a href="#" class="badge badge-primary">Primary</a>
                      <a href="#" class="badge badge-secondary">Secondary</a>
                      <a href="#" class="badge badge-success">Success</a>
                      <a href="#" class="badge badge-danger">Danger</a>
                      <a href="#" class="badge badge-warning">Warning</a>
                      <a href="#" class="badge badge-info">Info</a>
                      <a href="#" class="badge badge-light">Light</a>
                      <a href="#" class="badge badge-dark">Dark</a>
                  </div>
                </div>
                <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                      <h4 class="card-title">Contextual variations Border</h4>
                    </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#badge-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="badge-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="contectual-variation-border" class="text-white"><code>
&#x3C;span class=&#x22; badge border border-primary text-primary &#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22; badge badge-pill border border-primary text-primary&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;a href=&#x22;#&#x22; class=&#x22; badge border border-primary text-primary&#x22;&#x3E;Primary&#x3C;/a&#x3E;</code></pre></kbd></div>
                        </div>
                    <p class="">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                    <span class=" badge border border-primary text-primary ">Primary</span>
                    <span class=" badge border border-secondary text-secondary ">Secondary</span>
                    <span class=" badge border border-success text-success ">Success</span>
                    <span class=" badge border border-danger text-danger ">Danger</span>
                    <span class=" badge border border-warning text-warning ">Warning</span>
                    <span class=" badge border border-info text-info ">Info</span>
                    <span class=" badge border border-light text-light ">Light</span>
                    <span class=" badge border border-dark text-dark ">Dark</span>
                    <h5 class="card-title mt-4">Pill badges</h5>
                    <p class="">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                    <span class=" badge badge-pill border border-primary text-primary">Primary</span>
                    <span class=" badge badge-pill border border-secondary text-secondary">Secondary</span>
                    <span class=" badge badge-pill border border-success text-success">Success</span>
                    <span class=" badge badge-pill border border-danger text-danger">Danger</span>
                    <span class=" badge badge-pill border border-warning text-warning">Warning</span>
                    <span class=" badge badge-pill border border-info text-info">Info</span>
                    <span class=" badge badge-pill border border-light text-light">Light</span>
                    <span class=" badge badge-pill border border-dark text-dark">Dark</span>
                    <h5 class="card-title mt-4">Links</h5>
                    <p class="">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                    <a href="#" class=" badge border border-primary text-primary">Primary</a>
                    <a href="#" class=" badge border border-secondary text-secondary">Secondary</a>
                    <a href="#" class=" badge border border-success text-success">Success</a>
                    <a href="#" class=" badge border border-danger text-danger">Danger</a>
                    <a href="#" class=" badge border border-warning text-warning">Warning</a>
                    <a href="#" class=" badge border border-info text-info">Info</a>
                    <a href="#" class=" badge border border-light text-light">Light</a>
                    <a href="#" class=" badge border border-dark text-dark">Dark</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</x-layouts.dashboard>