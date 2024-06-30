<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Examples</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#progressbar-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="progressbar-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="progressbar-example" class="text-white"><code>
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; aria-valuenow=&#x22;0&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 25%&#x22; aria-valuenow=&#x22;25&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 50%&#x22; aria-valuenow=&#x22;50&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 75%&#x22; aria-valuenow=&#x22;75&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 100%&#x22; aria-valuenow=&#x22;100&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 <code>&lt;progress&gt;</code> element</a>, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
                     <ul>
                        <li>We use the <code>.progress</code> as a wrapper to indicate the max value of the progress bar.</li>
                        <li>We use the inner <code>.progress-bar</code> to indicate the progress so far.</li>
                        <li>The <code>.progress-bar</code> requires an inline style, utility class, or custom CSS to set their width.</li>
                        <li>The <code>.progress-bar</code> also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>
                     </ul>
                     <p>Put that all together, and you have the following examples.</p>
                     <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Height</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#progressbar-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="progressbar-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="progressbar-height" class="text-white"><code>
&#x3C;div class=&#x22;progress mb-3&#x22; style=&#x22;height: 3px;&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 25%;&#x22; aria-valuenow=&#x22;25&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;25%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22; style=&#x22;height: 10px;&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 50%;&#x22; aria-valuenow=&#x22;50&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;50%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22; style=&#x22;height: 15px;&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 75%;&#x22; aria-valuenow=&#x22;75&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;75%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress&#x22; style=&#x22;height: 20px;&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 99%;&#x22; aria-valuenow=&#x22;99&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;99%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>
                     <div class="progress mb-3" style="height: 3px;">
                        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                     </div>
                     <div class="progress mb-3" style="height: 10px;">
                        <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                     </div>
                     <div class="progress mb-3" style="height: 15px;">
                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                     </div>
                     <div class="progress" style="height: 20px;">
                        <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Animated stripes</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#progressbar-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="progressbar-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="animated-stripes" class="text-white"><code>
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar progress-bar-striped progress-bar-animated&#x22; role=&#x22;progressbar&#x22; aria-valuenow=&#x22;75&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22; style=&#x22;width: 75%&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar progress-bar-striped progress-bar-animated bg-success&#x22; role=&#x22;progressbar&#x22; aria-valuenow=&#x22;75&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22; style=&#x22;width: 75%&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>
                     <div class="progress mb-3">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                     </div>
                     <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Labels</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#progressbar-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="progressbar-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="progressbar-lables" class="text-white"><code>
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 25%;&#x22; aria-valuenow=&#x22;25&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;25%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 50%;&#x22; aria-valuenow=&#x22;50&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;50%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 75%;&#x22; aria-valuenow=&#x22;75&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;75%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 99%;&#x22; aria-valuenow=&#x22;99&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;99%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>
                     <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                     </div>
                     <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Backgrounds</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#progressbar-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="progressbar-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="progressbar-background" class="text-white"><code>
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar bg-success&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 25%&#x22; aria-valuenow=&#x22;25&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar bg-info&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 50%&#x22; aria-valuenow=&#x22;50&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar bg-warning&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 75%&#x22; aria-valuenow=&#x22;75&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar bg-danger&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 100%&#x22; aria-valuenow=&#x22;100&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Use background utility classes to change the appearance of individual progress bars.</p>
                     <div class="progress mb-3">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Multiple bars</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#progressbar-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="progressbar-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="progressbar-multiple-bars" class="text-white"><code>
 &#x3C;div class=&#x22;progress&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 15%&#x22; aria-valuenow=&#x22;15&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
   &#x3C;div class=&#x22;progress-bar bg-success&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 30%&#x22; aria-valuenow=&#x22;30&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
   &#x3C;div class=&#x22;progress-bar bg-info&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 20%&#x22; aria-valuenow=&#x22;20&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Include multiple progress bars in a progress component if you need.</p>
                     <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Striped</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#progressbar-7" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="progressbar-7">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="progressbar-striped" class="text-white"><code>
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar progress-bar-striped&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 10%&#x22; aria-valuenow=&#x22;10&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar progress-bar-striped bg-success&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 25%&#x22; aria-valuenow=&#x22;25&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar progress-bar-striped bg-info&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 50%&#x22; aria-valuenow=&#x22;50&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress mb-3&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar progress-bar-striped bg-warning&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 75%&#x22; aria-valuenow=&#x22;75&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;progress&#x22;&#x3E;
   &#x3C;div class=&#x22;progress-bar progress-bar-striped bg-danger&#x22; role=&#x22;progressbar&#x22; style=&#x22;width: 100%&#x22; aria-valuenow=&#x22;100&#x22; aria-valuemin=&#x22;0&#x22; aria-valuemax=&#x22;100&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>
                     <div class="progress mb-3">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress mb-3">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                     <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
