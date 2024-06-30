<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">List group</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-group-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-group-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="list-group" class="text-white"><code>
&#x3C;ul class=&#x22;list-group&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Cras justo odio&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Morbi leo risus&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Porta ac consectetur ac&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Vestibulum at eros&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
                     <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Disabled items</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-group-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-group-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="disabled-items" class="text-white"><code>
&#x3C;ul class=&#x22;list-group&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item disabled&#x22; aria-disabled=&#x22;true&#x22;&#x3E;Cras justo odio&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Morbi leo risus&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Porta ac consectetur ac&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Vestibulum at eros&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</p>
                     <ul class="list-group">
                        <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Flush</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="flush" class="text-white"><code>
&#x3C;ul class=&#x22;list-group list-group-flush&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Cras justo odio&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Morbi leo risus&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Porta ac consectetur ac&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Vestibulum at eros&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add <code class="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>
                     <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Contextual classes</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="contextual-class" class="text-white"><code>
&#x3C;ul class=&#x22;list-group&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-primary&#x22;&#x3E;A simple primary list group item&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-secondary&#x22;&#x3E;A simple secondary list group item&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-success&#x22;&#x3E;A simple success list group item&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-danger&#x22;&#x3E;A simple danger list group item&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-warning&#x22;&#x3E;A simple warning list group item&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-info&#x22;&#x3E;A simple info list group item&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-light&#x22;&#x3E;A simple light list group item&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item list-group-item-dark&#x22;&#x3E;A simple dark list group item&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Use contextual classes to style list items with a stateful background and color.</p>
                     <ul class="list-group">
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
                        <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                        <li class="list-group-item list-group-item-success">A simple success list group item</li>
                        <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
                        <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
                        <li class="list-group-item list-group-item-info">A simple info list group item</li>
                        <li class="list-group-item list-group-item-light">A simple light list group item</li>
                        <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">With badges</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="with-badges" class="text-white"><code>
&#x3C;ul class=&#x22;list-group&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item d-flex justify-content-between align-items-center&#x22;&#x3E;
      Cras justo odio
      &#x3C;span class=&#x22;badge badge-primary badge-pill&#x22;&#x3E;14&#x3C;/span&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item d-flex justify-content-between align-items-center&#x22;&#x3E;
      Dapibus ac facilisis in
      &#x3C;span class=&#x22;badge badge-success badge-pill&#x22;&#x3E;2&#x3C;/span&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item d-flex justify-content-between align-items-center&#x22;&#x3E;
      Morbi leo risus
      &#x3C;span class=&#x22;badge badge-danger badge-pill&#x22;&#x3E;1&#x3C;/span&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <a href="/docs/4.3/utilities/flex/">utilities</a>.</p>
                     <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                           Cras justo odio
                           <span class="badge badge-primary badge-pill">14</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                           Dapibus ac facilisis in
                           <span class="badge badge-success badge-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                           Morbi leo risus
                           <span class="badge badge-danger badge-pill">1</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">With badges</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="with-badges" class="text-white"><code>
&#x3C;ul class=&#x22;list-group&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item d-flex justify-content-between align-items-center iq-bg-primary&#x22;&#x3E;
      Cras justo odio
      &#x3C;span class=&#x22;badge badge-primary badge-pill&#x22;&#x3E;14&#x3C;/span&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item d-flex justify-content-between align-items-center iq-bg-success&#x22; &#x3E;
      Dapibus ac facilisis in
      &#x3C;span class=&#x22;badge badge-success badge-pill&#x22;&#x3E;2&#x3C;/span&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item d-flex justify-content-between align-items-center iq-bg-danger&#x22;&#x3E;
      Morbi leo risus
      &#x3C;span class=&#x22;badge badge-danger badge-pill&#x22;&#x3E;1&#x3C;/span&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <a href="/docs/4.3/utilities/flex/">utilities</a>.</p>
                     <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center iq-bg-primary">
                           Cras justo odio
                           <span class="badge badge-primary badge-pill">14</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center iq-bg-success" >
                           Dapibus ac facilisis in
                           <span class="badge badge-success badge-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center iq-bg-danger">
                           Morbi leo risus
                           <span class="badge badge-danger badge-pill">1</span>
                        </li>
                     </ul>
                  </div>
               </div></div>
                  <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">List Active</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-7" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-7">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="avatar-sizing" class="text-white"><code>
&#x3C;ul class=&#x22;list-group&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item active&#x22;&#x3E;Cras justo odio&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Morbi leo risus&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Porta ac consectetur ac&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Vestibulum at eros&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>
                     <ul class="list-group">
                        <li class="list-group-item active">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Links and buttons</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-8" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-8">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="links-and-buttons" class="text-white"><code>
&#x3C;div class=&#x22;list-group&#x22;&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action active&#x22;&#x3E;
   Cras justo odio
   &#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action&#x22;&#x3E;Morbi leo risus&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action&#x22;&#x3E;Porta ac consectetur ac&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action disabled&#x22; tabindex=&#x22;-1&#x22; aria-disabled=&#x22;true&#x22;&#x3E;Vestibulum at eros&#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.</p>
                     <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
                     <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active">
                        Cras justo odio
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                        <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                        <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Horizontal</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-9" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-9">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="horizontal" class="text-white"><code>
&#x3C;ul class=&#x22;list-group list-group-horizontal&#x22;&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Cras justo odio&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Morbi leo risus&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal-{sm|md|lg|xl}</code> to make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently <strong>horizontal list groups cannot be combined with flush list groups.</strong></p>
                     <p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add <code>.flex-fill</code> to each list group item.</p>
                     <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Contextual classes Action</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-10" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-10">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="contextual-classes-action" class="text-white"><code>
&#x3C;div class=&#x22;list-group&#x22;&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action&#x22;&#x3E;Dapibus ac facilisis in&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-primary&#x22;&#x3E;A simple primary list group item&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-secondary&#x22;&#x3E;A simple secondary list group item&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-success&#x22;&#x3E;A simple success list group item&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-danger&#x22;&#x3E;A simple danger list group item&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-warning&#x22;&#x3E;A simple warning list group item&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-info&#x22;&#x3E;A simple info list group item&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-light&#x22;&#x3E;A simple light list group item&#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action list-group-item-dark&#x22;&#x3E;A simple dark list group item&#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Use contextual classes to style list items with a stateful background and color.</p>
                     <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
                     </div>
                  </div>
                        </div>
                        <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Custom content</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#list-groups-11" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="list-groups-11">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="custom-content" class="text-white"><code>
&#x3C;div class=&#x22;list-group&#x22;&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action active&#x22;&#x3E;
      &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mb-1 text-white&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
         &#x3C;small&#x3E;3 days ago&#x3C;/small&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.&#x3C;/p&#x3E;
      &#x3C;small&#x3E;Donec id elit non mi porta.&#x3C;/small&#x3E;
   &#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action&#x22;&#x3E;
      &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
         &#x3C;small class=&#x22;text-muted&#x22;&#x3E;3 days ago&#x3C;/small&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.&#x3C;/p&#x3E;
      &#x3C;small class=&#x22;text-muted&#x22;&#x3E;Donec id elit non mi porta.&#x3C;/small&#x3E;
   &#x3C;/a&#x3E;
   &#x3C;a href=&#x22;#&#x22; class=&#x22;list-group-item list-group-item-action&#x22;&#x3E;
      &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
         &#x3C;small class=&#x22;text-muted&#x22;&#x3E;3 days ago&#x3C;/small&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.&#x3C;/p&#x3E;
      &#x3C;small class=&#x22;text-muted&#x22;&#x3E;Donec id elit non mi porta.&#x3C;/small&#x3E;
   &#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <a href="/docs/4.3/utilities/flex/">flexbox utilities</a>.</p>
                     <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active">
                           <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1 text-white">List group item heading</h5>
                              <small>3 days ago</small>
                           </div>
                           <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                           <small>Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                           <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">List group item heading</h5>
                              <small class="text-muted">3 days ago</small>
                           </div>
                           <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                           <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                           <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">List group item heading</h5>
                              <small class="text-muted">3 days ago</small>
                           </div>
                           <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                           <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
