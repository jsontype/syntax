<x-layouts.dashboard>
   <div class="container-fluid ui-elements">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Tooltips</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tooltip-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tooltip-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="tooltips" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;top&#x22; title=&#x22;Tooltip on top&#x22;&#x3E;Tooltip on top&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;right&#x22; title=&#x22;Tooltip on right&#x22;&#x3E;Tooltip on right&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;bottom&#x22; title=&#x22;Tooltip on bottom&#x22;&#x3E;Tooltip on bottom&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;left&#x22; title=&#x22;Tooltip on left&#x22;&#x3E;Tooltip on left&#x3C;/button&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-placement attribute specifies the tooltip position.</p>
                     <button type="button" class="btn btn-secondary mt-2" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                     Tooltip on top
                     </button>
                     <button type="button" class="btn btn-secondary mt-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                     Tooltip on right
                     </button>
                     <button type="button" class="btn btn-secondary mt-2" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                     Tooltip on bottom
                     </button>
                     <button type="button" class="btn btn-secondary mt-2" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                     Tooltip on left
                     </button>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Tooltips</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tooltip-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tooltip-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="tooltips2" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;top&#x22; title=&#x22;Tooltip on top&#x22;&#x3E;Tooltip on top&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-success mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;right&#x22; title=&#x22;Tooltip on right&#x22;&#x3E;Tooltip on right&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-danger mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;bottom&#x22; title=&#x22;Tooltip on bottom&#x22;&#x3E;Tooltip on bottom&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-info mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;left&#x22; title=&#x22;Tooltip on left&#x22;&#x3E;Tooltip on left&#x3C;/button&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using background colors</p>
                     <button type="button" class="btn btn-primary mt-2" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                     Tooltip on top
                     </button>
                     <button type="button" class="btn btn-success mt-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                     Tooltip on right
                     </button>
                     <button type="button" class="btn btn-danger mt-2" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                     Tooltip on bottom
                     </button>
                     <button type="button" class="btn btn-info mt-2" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                     Tooltip on left
                     </button>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Disabled elements</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tooltip-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tooltip-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="disabled-elements" class="text-white"><code>
&#x3C;span class=&#x22;d-inline-block&#x22; tabindex=&#x22;0&#x22; data-toggle=&#x22;tooltip&#x22; title=&#x22;Disabled tooltip&#x22;&#x3E;
   &#x3C;button class=&#x22;btn btn-primary&#x22; style=&#x22;pointer-events: none;&#x22; type=&#x22;button&#x22; disabled&#x3E;Disabled button&#x3C;/button&#x3E;
&#x3C;/span&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
                     <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
                     <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
                     </span>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Tooltips</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tooltip-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tooltip-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="tooltips3" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-primary mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;top&#x22; title=&#x22;Tooltip on top&#x22;&#x3E;Tooltip on top&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-success mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;right&#x22; title=&#x22;Tooltip on right&#x22;&#x3E;Tooltip on right&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-danger mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;bottom&#x22; title=&#x22;Tooltip on bottom&#x22;&#x3E;Tooltip on bottom&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn iq-bg-info mt-2&#x22; data-toggle=&#x22;tooltip&#x22; data-placement=&#x22;left&#x22; title=&#x22;Tooltip on left&#x22;&#x3E;Tooltip on left&#x3C;/button&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using Light background colors</p>
                     <button type="button" class="btn iq-bg-primary mt-2" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                     Tooltip on top
                     </button>
                     <button type="button" class="btn iq-bg-success mt-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                     Tooltip on right
                     </button>
                     <button type="button" class="btn iq-bg-danger mt-2" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                     Tooltip on bottom
                     </button>
                     <button type="button" class="btn iq-bg-info mt-2" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                     Tooltip on left
                     </button>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-12">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Hover elements</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tooltip-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tooltip-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="hover-elements" class="text-white"><code>
&#x3C;a href=&#x22;#&#x22; data-toggle=&#x22;tooltip&#x22; title=&#x22;Some tooltip text!&#x22;&#x3E;Hover over me&#x3C;/a&#x3E;
&#x3C;!-- Generated markup by the plugin --&#x3E;
&#x3C;div class=&#x22;tooltip bs-tooltip-top&#x22; role=&#x22;tooltip&#x22;&#x3E;
   &#x3C;div class=&#x22;arrow&#x22;&#x3E;&#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tooltip-inner&#x22;&#x3E;Some tooltip text!&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Hover over the buttons below to see the tooltip.</p>
                     <!-- HTML to write -->
                     <a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>
                     <!-- Generated markup by the plugin -->
                     <div class="tooltip bs-tooltip-top" role="tooltip">
                        <div class="arrow"></div>
                        <div class="tooltip-inner">
                           Some tooltip text!
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
