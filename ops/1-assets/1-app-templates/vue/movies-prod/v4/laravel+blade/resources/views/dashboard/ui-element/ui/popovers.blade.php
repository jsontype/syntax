<x-layouts.dashboard>
   <div class="container-fluid ui-elements">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Popovers</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#popovers-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="popovers-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="popovers" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-lg btn-danger mt-2&#x22; data-toggle=&#x22;popover&#x22; title=&#x22;Popover title&#x22; data-content=&#x22;And here&#x27;s some amazing content. It&#x27;s very engaging. Right?&#x22;&#x3E;Click to toggle popover&#x3C;/button&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-2">Lorem Ipsum is simply duiqy text of the printing and typesetting industry.</p>
                     <button type="button" class="btn btn-lg btn-danger mt-2" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Dismiss on next click</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#popovers-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="popovers-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="dismiss-on-next-click" class="text-white"><code>
&#x3C;a tabindex=&#x22;0&#x22; class=&#x22;btn btn-danger mt-2&#x22; role=&#x22;button&#x22; data-toggle=&#x22;popover&#x22; data-trigger=&#x22;focus&#x22; title=&#x22;Dismissible popover&#x22; data-content=&#x22;And here&#x27;s some amazing content. It&#x27;s very engaging. Right?&#x22;&#x3E;Dismissible popover&#x3C;/a&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-2">Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>
                     <a tabindex="0" class="btn btn-danger text-white mt-2" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Disabled elements</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#popovers-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="popovers-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="disabled-elements" class="text-white"><code>
&#x3C;span class=&#x22;d-inline-block&#x22; data-toggle=&#x22;popover&#x22; data-content=&#x22;Disabled popover&#x22;&#x3E;
   &#x3C;button class=&#x22;btn btn-primary mt-2&#x22; style=&#x22;pointer-events: none;&#x22; type=&#x22;button&#x22; disabled&#x3E;Disabled button&#x3C;/button&#x3E;
&#x3C;/span&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-2">Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</p>
                     <span class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
                     <button class="btn btn-primary mt-2" style="pointer-events: none;" type="button" disabled>Disabled button</button>
                     </span>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Hover elements</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#popovers-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="popovers-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="hover-elements" class="text-white"><code>
&#x3C;span class=&#x22;d-inline-block&#x22; data-trigger=&#x22;hover&#x22; data-toggle=&#x22;popover&#x22; data-content=&#x22;Disabled popover&#x22;&#x3E;
   &#x3C;button class=&#x22;btn btn-primary mt-2&#x22; style=&#x22;pointer-events: none;&#x22; type=&#x22;button&#x22; disabled&#x3E;Disabled button&#x3C;/button&#x3E;
&#x3C;/span&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-2">For disabled popover triggers, you may also prefer <code>data-trigger="hover"</code> so that the popover appears as iiqediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>
                     <span class="d-inline-block" data-trigger="hover" data-toggle="popover" data-content="Disabled popover">
                     <button class="btn btn-primary mt-2" style="pointer-events: none;" type="button" disabled>Disabled button</button>
                     </span>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Four directions</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#popovers-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="popovers-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="four-directions" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;top&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on top&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;right&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on right&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;bottom&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on bottom&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;left&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on left&#x3C;/button&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-2">Four options are available: top, right, bottom, and left aligned.</p>
                     <button type="button" class="btn btn-secondary mt-2" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on top
                     </button>
                     <button type="button" class="btn btn-secondary mt-2" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on right
                     </button>
                     <button type="button" class="btn btn-secondary mt-2" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on bottom
                     </button>
                     <button type="button" class="btn btn-secondary mt-2" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on left
                     </button>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Popovers With Color</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#popovers-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="popovers-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="popovers-with-color" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;top&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on top&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-success mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;right&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on right&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-danger mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;bottom&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on bottom&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-info mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;left&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on left&#x3C;/button&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-2">Four options are available: top, right, bottom, and left aligned.</p>
                     <button type="button" class="btn btn-primary mt-2" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on top
                     </button>
                     <button type="button" class="btn btn-success mt-2" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on right
                     </button>
                     <button type="button" class="btn btn-danger mt-2" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on bottom
                     </button>
                     <button type="button" class="btn btn-info mt-2" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on left
                     </button>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Popovers With Color</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#popovers-7" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="popovers-7">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="popovers-with-color" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-primary mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;top&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on top&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-success mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;right&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on right&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-danger mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;bottom&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on bottom&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-info mt-2&#x22; data-container=&#x22;body&#x22; data-toggle=&#x22;popover&#x22; data-placement=&#x22;left&#x22; data-content=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22;&#x3E;Popover on left&#x3C;/button&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-2">Four options are available: top, right, bottom, and left aligned.</p>
                     <button type="button" class="btn iq-bg-primary mt-2" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on top
                     </button>
                     <button type="button" class="btn iq-bg-success mt-2" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on right
                     </button>
                     <button type="button" class="btn iq-bg-danger mt-2" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on bottom
                     </button>
                     <button type="button" class="btn iq-bg-info mt-2" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                     Popover on left
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
