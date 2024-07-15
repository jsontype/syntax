<x-layouts.dashboard>
      <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Modal components</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#modal-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="modal-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="modal-components" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary &#x22; data-toggle=&#x22;modal&#x22; data-target=&#x22;#exampleModal&#x22;&#x3E;
Launch demo modal
&#x3C;/button&#x3E;
&#x3C;!-- Modal --&#x3E;
&#x3C;div class=&#x22;modal fade&#x22; id=&#x22;exampleModal&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-labelledby=&#x22;exampleModalLabel&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;modal-dialog&#x22; role=&#x22;document&#x22;&#x3E;
      &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
         &#x3C;div class=&#x22;modal-header&#x22;&#x3E;
            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalLabel&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;close&#x22; data-dismiss=&#x22;modal&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-body&#x22;&#x3E;
            ...
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-footer&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-1">Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModal">
                     Launch demo modal
                     </button>
                     <!-- Modal -->
                     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 ...
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Modal Scrolling </h4>
                     </div>
                   <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#modal-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="modal-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="modal-scrolling" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary &#x22; data-toggle=&#x22;modal&#x22; data-target=&#x22;#exampleModalScrollable&#x22;&#x3E;
Launch demo modal
&#x3C;/button&#x3E;
&#x3C;!-- Modal --&#x3E;
&#x3C;div class=&#x22;modal fade&#x22; id=&#x22;exampleModalScrollable&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-labelledby=&#x22;exampleModalScrollableTitle&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;modal-dialog modal-dialog-scrollable&#x22; role=&#x22;document&#x22;&#x3E;
      &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
         &#x3C;div class=&#x22;modal-header&#x22;&#x3E;
            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalScrollableTitle&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;close&#x22; data-dismiss=&#x22;modal&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-body&#x22;&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-footer&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalScrollable">
                     Launch demo modal
                     </button>
                     <!-- Modal -->
                     <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Optional sizes</h4>
                     </div>
                   <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#modal-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="modal-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="optional-size" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary &#x22; data-toggle=&#x22;modal&#x22; data-target=&#x22;.bd-example-modal-xl&#x22;&#x3E;Extra large modal&#x3C;/button&#x3E;
&#x3C;div class=&#x22;modal fade bd-example-modal-xl&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22;   aria-hidden=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;modal-dialog modal-xl&#x22;&#x3E;
      &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
         &#x3C;div class=&#x22;modal-header&#x22;&#x3E;
            &#x3C;h5 class=&#x22;modal-title&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;close&#x22; data-dismiss=&#x22;modal&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-body&#x22;&#x3E;
            &#x3C;p&#x3E;Modal body text goes here.&#x3C;/p&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-footer&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-1">Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
                     <!-- Extra large modal -->
                     <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>
                     <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog"   aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <p>Modal body text goes here.</p>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- Large modal -->
                     <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
                     <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"  aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <p>Modal body text goes here.</p>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- Small modal -->
                     <button type="button" class="btn btn-primary " data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>
                     <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog"  aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <p>Modal body text goes here.</p>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Scrolling long content</h4>
                     </div>
                   <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#modal-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="modal-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="scrolling-long-content" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary &#x22; data-toggle=&#x22;modal&#x22; data-target=&#x22;#exampleModalLong&#x22;&#x3E;
Launch demo modal
&#x3C;/button&#x3E;
&#x3C;!-- Modal --&#x3E;
&#x3C;div class=&#x22;modal fade&#x22; id=&#x22;exampleModalLong&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-labelledby=&#x22;exampleModalLongTitle&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;modal-dialog&#x22; role=&#x22;document&#x22;&#x3E;
      &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
         &#x3C;div class=&#x22;modal-header&#x22;&#x3E;
            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalLongTitle&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;close&#x22; data-dismiss=&#x22;modal&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-body&#x22;&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-footer&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalLong">
                     Launch demo modal
                     </button>
                     <!-- Modal -->
                     <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Vertically centered</h4>
                     </div>
                   <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#modal-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="modal-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="vertically-centered" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary &#x22; data-toggle=&#x22;modal&#x22; data-target=&#x22;#exampleModalCenter&#x22;&#x3E;
Launch demo modal
&#x3C;/button&#x3E;
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary &#x22; data-toggle=&#x22;modal&#x22; data-target=&#x22;#exampleModalCenteredScrollable&#x22;&#x3E;
Vertically centered scrollable modal
&#x3C;/button&#x3E;
&#x3C;!-- Modal --&#x3E;
&#x3C;div class=&#x22;modal fade&#x22; id=&#x22;exampleModalCenter&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-labelledby=&#x22;exampleModalCenterTitle&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;modal-dialog modal-dialog-centered&#x22; role=&#x22;document&#x22;&#x3E;
      &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
         &#x3C;div class=&#x22;modal-header&#x22;&#x3E;
            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalCenterTitle&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;close&#x22; data-dismiss=&#x22;modal&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-body&#x22;&#x3E;
            ...
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-footer&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div id=&#x22;exampleModalCenteredScrollable&#x22; class=&#x22;modal fade&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-labelledby=&#x22;exampleModalCenteredScrollableTitle&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;modal-dialog modal-dialog-scrollable modal-dialog-centered&#x22; role=&#x22;document&#x22;&#x3E;
      &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
         &#x3C;div class=&#x22;modal-header&#x22;&#x3E;
            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalCenteredScrollableTitle&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;close&#x22; data-dismiss=&#x22;modal&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xD7;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-body&#x22;&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&#x3C;/p&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-footer&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-1">Add <code class="highlighter-rouge">.modal-dialog-centered</code> to <code class="highlighter-rouge">.modal-dialog</code> to vertically center the modal.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                     Launch demo modal
                     </button>
                     <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalCenteredScrollable">
                     Vertically centered scrollable modal
                     </button>
                     <!-- Modal -->
                     <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 ...
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="exampleModalCenteredScrollable" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">×</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                 <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                 <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Using the grid</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#modal-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="modal-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="using-the-grid" class="text-white"><code>
&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary &#x22; data-toggle=&#x22;modal&#x22; data-target=&#x22;#gridSystemModal&#x22;&#x3E;
Launch demo modal
&#x3C;/button&#x3E;
&#x3C;div id=&#x22;gridSystemModal&#x22; class=&#x22;modal fade&#x22; tabindex=&#x22;-1&#x22; role=&#x22;dialog&#x22; aria-labelledby=&#x22;gridModalLabel&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;modal-dialog&#x22; role=&#x22;document&#x22;&#x3E;
      &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
         &#x3C;div class=&#x22;modal-header&#x22;&#x3E;
            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;gridModalLabel&#x22;&#x3E;Grids in modals&#x3C;/h5&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;close&#x22; data-dismiss=&#x22;modal&#x22; aria-label=&#x22;Close&#x22;&#x3E;&#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xD7;&#x3C;/span&#x3E;&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-body&#x22;&#x3E;
            &#x3C;div class=&#x22;iq-example-row&#x22;&#x3E;
               &#x3C;div class=&#x22;container-fluid&#x22;&#x3E;
                  &#x3C;div class=&#x22;row mb-3&#x22;&#x3E;
                     &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;.col-md-4&#x3C;/div&#x3E;
                     &#x3C;div class=&#x22;col-md-4 ml-auto&#x22;&#x3E;.col-md-4 .ml-auto&#x3C;/div&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;row mb-3&#x22;&#x3E;
                     &#x3C;div class=&#x22;col-md-3 ml-auto&#x22;&#x3E;.col-md-3 .ml-auto&#x3C;/div&#x3E;
                     &#x3C;div class=&#x22;col-md-2 ml-auto&#x22;&#x3E;.col-md-2 .ml-auto&#x3C;/div&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;row mb-3&#x22;&#x3E;
                     &#x3C;div class=&#x22;col-md-6 ml-auto&#x22;&#x3E;.col-md-6 .ml-auto&#x3C;/div&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;div class=&#x22;row&#x22;&#x3E;
                     &#x3C;div class=&#x22;col-sm-9&#x22;&#x3E;
                        Level 1: .col-sm-9
                        &#x3C;div class=&#x22;row&#x22;&#x3E;
                           &#x3C;div class=&#x22;col-8 col-sm-6&#x22;&#x3E;
                              Level 2: .col-8 .col-sm-6
                           &#x3C;/div&#x3E;
                           &#x3C;div class=&#x22;col-4 col-sm-6&#x22;&#x3E;
                              Level 2: .col-4 .col-sm-6
                           &#x3C;/div&#x3E;
                        &#x3C;/div&#x3E;
                     &#x3C;/div&#x3E;
                  &#x3C;/div&#x3E;
               &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;modal-footer&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p class="mb-1">Utilize the Bootstrap grid system within a modal by nesting <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.</p>
                     <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#gridSystemModal">
                     Launch demo modal
                     </button>
                     <div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="gridModalLabel">Grids in modals</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                              </div>
                              <div class="modal-body">
                                 <div class="iq-example-row">
                                    <div class="container-fluid">
                                       <div class="row mb-3">
                                          <div class="col-md-4">.col-md-4</div>
                                          <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                                       </div>
                                       <div class="row mb-3">
                                          <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                                          <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                                       </div>
                                       <div class="row mb-3">
                                          <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                                       </div>
                                       <div class="row">
                                          <div class="col-sm-9">
                                             Level 1: .col-sm-9
                                             <div class="row">
                                                <div class="col-8 col-sm-6">
                                                   Level 2: .col-8 .col-sm-6
                                                </div>
                                                <div class="col-4 col-sm-6">
                                                   Level 2: .col-4 .col-sm-6
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
