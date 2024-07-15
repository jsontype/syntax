<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Notifications</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#notification-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="notification-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="notification" class="text-white"><code>
&#x3C;div class=&#x22;toast fade show&#x22; role=&#x22;alert&#x22; aria-live=&#x22;assertive&#x22; aria-atomic=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;toast-header&#x22;&#x3E;
      &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
         &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#007aff&#x22;&#x3E;&#x3C;/rect&#x3E;
      &#x3C;/svg&#x3E;
      &#x3C;strong class=&#x22;mr-auto&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
      &#x3C;small&#x3E;11 mins ago&#x3C;/small&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
      &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xD7;&#x3C;/span&#x3E;
      &#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
      Hello, world! This is a toast message.
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
                     <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                           <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                              <rect width="100%" height="100%" fill="#007aff"></rect>
                           </svg>
                           <strong class="mr-auto">Bootstrap</strong>
                           <small>11 mins ago</small>
                           <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                           <span aria-hidden="true">×</span>
                           </button>
                        </div>
                        <div class="toast-body">
                           Hello, world! This is a toast message.
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Stacking</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#notification-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="notification-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="stacking" class="text-white"><code>
&#x3C;div class=&#x22;toast fade show&#x22; role=&#x22;alert&#x22; aria-live=&#x22;assertive&#x22; aria-atomic=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;toast-header&#x22;&#x3E;
      &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
         &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#007aff&#x22;&#x3E;&#x3C;/rect&#x3E;
      &#x3C;/svg&#x3E;
      &#x3C;strong class=&#x22;mr-auto&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
      &#x3C;small class=&#x22;text-muted&#x22;&#x3E;just now&#x3C;/small&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
      &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
      &#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
      See? Just like this.
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;toast fade show&#x22; role=&#x22;alert&#x22; aria-live=&#x22;assertive&#x22; aria-atomic=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;toast-header&#x22;&#x3E;
      &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
         &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#007aff&#x22;&#x3E;&#x3C;/rect&#x3E;
      &#x3C;/svg&#x3E;
      &#x3C;strong class=&#x22;mr-auto&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
      &#x3C;small class=&#x22;text-muted&#x22;&#x3E;2 seconds ago&#x3C;/small&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
      &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
      &#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
      Heads up, toasts will stack automatically
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>
                     <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                           <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                              <rect width="100%" height="100%" fill="#007aff"></rect>
                           </svg>
                           <strong class="mr-auto">Bootstrap</strong>
                           <small class="text-muted">just now</small>
                           <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div class="toast-body">
                           See? Just like this.
                        </div>
                     </div>
                     <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                           <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                              <rect width="100%" height="100%" fill="#007aff"></rect>
                           </svg>
                           <strong class="mr-auto">Bootstrap</strong>
                           <small class="text-muted">2 seconds ago</small>
                           <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div class="toast-body">
                           Heads up, toasts will stack automatically
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Notifications horizontally and/or vertically </h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#notification-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="notification-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="notifications-horizontally" class="text-white"><code>
&#x3C;div class=&#x22;p-3 bg-dark&#x22;&#x3E;
   &#x3C;!-- Flexbox container for aligning the toasts --&#x3E;
   &#x3C;div aria-live=&#x22;polite&#x22; aria-atomic=&#x22;true&#x22; class=&#x22;d-flex justify-content-center align-items-center&#x22; style=&#x22;min-height: 200px;&#x22;&#x3E;
      &#x3C;!-- Then put toasts within --&#x3E;
      &#x3C;div class=&#x22;toast fade show&#x22; role=&#x22;alert&#x22; aria-live=&#x22;assertive&#x22; aria-atomic=&#x22;true&#x22;&#x3E;
         &#x3C;div class=&#x22;toast-header&#x22;&#x3E;
            &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
               &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#007aff&#x22;&#x3E;&#x3C;/rect&#x3E;
            &#x3C;/svg&#x3E;
            &#x3C;strong class=&#x22;mr-auto&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
            &#x3C;small&#x3E;11 mins ago&#x3C;/small&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
            Hello, world! This is a toast message.
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</p>
                     <div class="p-3 bg-dark">
                        <!-- Flexbox container for aligning the toasts -->
                        <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">
                           <!-- Then put toasts within -->
                           <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                              <div class="toast-header">
                                 <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <rect width="100%" height="100%" fill="#007aff"></rect>
                                 </svg>
                                 <strong class="mr-auto">Bootstrap</strong>
                                 <small>11 mins ago</small>
                                 <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="toast-body">
                                 Hello, world! This is a toast message.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Notifications</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#notification-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="notification-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="notification2" class="text-white"><code>
&#x3C;div class=&#x22;p-3 bg-dark&#x22;&#x3E;
   &#x3C;div class=&#x22;toast fade show&#x22; role=&#x22;alert&#x22; aria-live=&#x22;assertive&#x22; aria-atomic=&#x22;true&#x22;&#x3E;
      &#x3C;div class=&#x22;toast-header&#x22;&#x3E;
         &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
            &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#007aff&#x22;&#x3E;&#x3C;/rect&#x3E;
         &#x3C;/svg&#x3E;
         &#x3C;strong class=&#x22;mr-auto&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
         &#x3C;small&#x3E;11 mins ago&#x3C;/small&#x3E;
         &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
         &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xD7;&#x3C;/span&#x3E;
         &#x3C;/button&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
         Hello, world! This is a toast message.
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the <code>backdrop-filter</code> CSS property, we’ll also attempt to blur the elements under a toast.</p>
                     <div class="p-3 bg-dark">
                        <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                           <div class="toast-header">
                              <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                 <rect width="100%" height="100%" fill="#007aff"></rect>
                              </svg>
                              <strong class="mr-auto">Bootstrap</strong>
                              <small>11 mins ago</small>
                              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                              <span aria-hidden="true">×</span>
                              </button>
                           </div>
                           <div class="toast-body">
                              Hello, world! This is a toast message.
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Stacking Placement</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#notification-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="notification-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="stacking-placement" class="text-white"><code>
&#x3C;div class=&#x22;bg-dark p-3&#x22;&#x3E;
   &#x3C;div aria-live=&#x22;polite&#x22; aria-atomic=&#x22;true&#x22; style=&#x22;position: relative; min-height: 200px;&#x22;&#x3E;
      &#x3C;div class=&#x22;toast fade show&#x22; style=&#x22;position: absolute; top: 0; right: 0;&#x22;&#x3E;
         &#x3C;div class=&#x22;toast-header&#x22;&#x3E;
            &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
               &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#007aff&#x22;&#x3E;&#x3C;/rect&#x3E;
            &#x3C;/svg&#x3E;
            &#x3C;strong class=&#x22;mr-auto&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
            &#x3C;small&#x3E;11 mins ago&#x3C;/small&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
            &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;times;&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
            Hello, world! This is a toast message.
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.</p>
                     <div class="bg-dark p-3">
                        <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                           <div class="toast fade show" style="position: absolute; top: 0; right: 0;">
                              <div class="toast-header">
                                 <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <rect width="100%" height="100%" fill="#007aff"></rect>
                                 </svg>
                                 <strong class="mr-auto">Bootstrap</strong>
                                 <small>11 mins ago</small>
                                 <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="toast-body">
                                 Hello, world! This is a toast message.
                              </div>
                           </div>
                        </div>
                     </div>
                     <p class="mt-3">For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>
                     <div class="bg-dark p-3 mt-3">
                        <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                           <!-- Position it -->
                           <div style="position: absolute; top: 0; right: 0;">
                              <!-- Then put toasts within -->
                              <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                 <div class="toast-header">
                                    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                       <rect width="100%" height="100%" fill="#007aff"></rect>
                                    </svg>
                                    <strong class="mr-auto">Bootstrap</strong>
                                    <small class="text-muted">just now</small>
                                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                 </div>
                                 <div class="toast-body">
                                    See? Just like this.
                                 </div>
                              </div>
                              <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                 <div class="toast-header">
                                    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                       <rect width="100%" height="100%" fill="#007aff"></rect>
                                    </svg>
                                    <strong class="mr-auto">Bootstrap</strong>
                                    <small class="text-muted">2 seconds ago</small>
                                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                 </div>
                                 <div class="toast-body">
                                    Heads up, toasts will stack automatically
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-12">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Notifications</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#notification-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="notification-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="notifications" class="text-white"><code>
&#x3C;div class=&#x22;toast fade show bg-primary text-white border-0 rounded p-2&#x22; role=&#x22;alert&#x22; aria-live=&#x22;assertive&#x22; aria-atomic=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;toast-header bg-primary text-white&#x22;&#x3E;
      &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
         &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#fff&#x22;&#x3E;&#x3C;/rect&#x3E;
      &#x3C;/svg&#x3E;
      &#x3C;strong class=&#x22;mr-auto text-white&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
      &#x3C;small&#x3E;11 mins ago&#x3C;/small&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close text-white&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
      &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xD7;&#x3C;/span&#x3E;
      &#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
      Hello, world! This is a toast message.
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;toast fade show bg-success text-white border-0 rounded p-2 mt-3&#x22; role=&#x22;alert&#x22; aria-live=&#x22;assertive&#x22; aria-atomic=&#x22;true&#x22;&#x3E;
   &#x3C;div class=&#x22;toast-header bg-success text-white&#x22;&#x3E;
      &#x3C;svg class=&#x22;bd-placeholder-img rounded mr-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22; role=&#x22;img&#x22;&#x3E;
         &#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#fff&#x22;&#x3E;&#x3C;/rect&#x3E;
      &#x3C;/svg&#x3E;
      &#x3C;strong class=&#x22;mr-auto text-white&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
      &#x3C;small&#x3E;11 mins ago&#x3C;/small&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;ml-2 mb-1 close text-white&#x22; data-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;
      &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xD7;&#x3C;/span&#x3E;
      &#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;toast-body&#x22;&#x3E;
      Hello, world! This is a toast message.
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
                     <div class="toast fade show bg-primary text-white border-0 rounded p-2" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header bg-primary text-white">
                           <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                              <rect width="100%" height="100%" fill="#fff"></rect>
                           </svg>
                           <strong class="mr-auto text-white">Bootstrap</strong>
                           <small>11 mins ago</small>
                           <button type="button" class="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
                           <span aria-hidden="true">×</span>
                           </button>
                        </div>
                        <div class="toast-body">
                           Hello, world! This is a toast message.
                        </div>
                     </div>
                     <div class="toast fade show bg-success text-white border-0 rounded p-2 mt-3" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header bg-success text-white">
                           <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                              <rect width="100%" height="100%" fill="#fff"></rect>
                           </svg>
                           <strong class="mr-auto text-white">Bootstrap</strong>
                           <small>11 mins ago</small>
                           <button type="button" class="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
                           <span aria-hidden="true">×</span>
                           </button>
                        </div>
                        <div class="toast-body">
                           Hello, world! This is a toast message.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
