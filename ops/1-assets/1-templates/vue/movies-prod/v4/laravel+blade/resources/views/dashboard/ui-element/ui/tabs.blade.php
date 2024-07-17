<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Basic Tabs</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="basic-tabs" class="text-white"><code>
&#x3C;ul class=&#x22;nav nav-tabs&#x22; id=&#x22;myTab-1&#x22; role=&#x22;tablist&#x22;&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;home-tab&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#home&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;profile-tab&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#profile&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;contact-tab&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#contact&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;div class=&#x22;tab-content&#x22; id=&#x22;myTabContent-2&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;home&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;home-tab&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;profile&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;profile-tab&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;contact&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;contact-tab&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
                     <ul class="nav nav-tabs" id="myTab-1" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                     </ul>
                     <div class="tab-content" id="myTabContent-2">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Basic Tabs Style 3</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="basic-tabs-style" class="text-white"><code>
&#x3C;ul class=&#x22;nav nav-tabs&#x22; id=&#x22;myTab-two&#x22; role=&#x22;tablist&#x22;&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;home-tab-two&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#home-two&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;profile-tab-two&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#profile-two&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;contact-tab-two&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#contact-two&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;div class=&#x22;tab-content&#x22; id=&#x22;myTabContent-1&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;home-two&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;home-tab-two&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;profile-two&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;profile-tab-two&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;contact-two&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;contact-tab-two&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
                     <ul class="nav nav-tabs" id="myTab-two" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" id="home-tab-two" data-toggle="tab" href="#home-two" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="profile-tab-two" data-toggle="tab" href="#profile-two" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="contact-tab-two" data-toggle="tab" href="#contact-two" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                     </ul>
                     <div class="tab-content" id="myTabContent-1">
                        <div class="tab-pane fade show active" id="home-two" role="tabpanel" aria-labelledby="home-tab-two">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="profile-two" role="tabpanel" aria-labelledby="profile-tab-two">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="contact-two" role="tabpanel" aria-labelledby="contact-tab-two">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Tabs Vertical Pills</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="tabs-vertical" class="text-white"><code>
&#x3C;div class=&#x22;col-sm-3&#x22;&#x3E;
   &#x3C;div class=&#x22;nav flex-column nav-pills text-center&#x22; id=&#x22;v-pills-tab&#x22; role=&#x22;tablist&#x22; aria-orientation=&#x22;vertical&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;v-pills-home-tab&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#v-pills-home&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;v-pills-home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;v-pills-profile-tab&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#v-pills-profile&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;v-pills-profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;v-pills-messages-tab&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#v-pills-messages&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;v-pills-messages&#x22; aria-selected=&#x22;false&#x22;&#x3E;Messages&#x3C;/a&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;v-pills-settings-tab&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#v-pills-settings&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;v-pills-settings&#x22; aria-selected=&#x22;false&#x22;&#x3E;Settings&#x3C;/a&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;col-sm-9&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-content mt-0&#x22; id=&#x22;v-pills-tabContent&#x22;&#x3E;
      &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;v-pills-home&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;v-pills-home-tab&#x22;&#x3E;
         &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&#x3C;/p&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;v-pills-profile&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;v-pills-profile-tab&#x22;&#x3E;
         &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&#x3C;/p&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;v-pills-messages&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;v-pills-messages-tab&#x22;&#x3E;
         &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&#x3C;/p&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;v-pills-settings&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;v-pills-settings-tab&#x22;&#x3E;
         &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.&#x3C;/p&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.</p>
                     <div class="row">
                        <div class="col-sm-3">
                           <div class="nav flex-column nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                              <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                              <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                              <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                           </div>
                        </div>
                        <div class="col-sm-9">
                           <div class="tab-content mt-0" id="v-pills-tabContent">
                              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                              </div>
                              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                              </div>
                              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                              </div>
                              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Tabs Justify Center</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="tabs-jutify-center" class="text-white"><code>
&#x3C;ul class=&#x22;nav nav-tabs justify-content-center&#x22; id=&#x22;myTab-2&#x22; role=&#x22;tablist&#x22;&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;home-tab-justify&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#home-justify&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;profile-tab-justify&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#profile-justify&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;contact-tab-justify&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#contact-justify&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;div class=&#x22;tab-content&#x22; id=&#x22;myTabContent-3&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;home-justify&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;home-tab-justify&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;profile-justify&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;profile-tab-justify&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;contact-justify&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;contact-tab-justify&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Centered with <code>.justify-content-center</code></p>
                     <ul class="nav nav-tabs justify-content-center" id="myTab-2" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" id="home-tab-justify" data-toggle="tab" href="#home-justify" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="profile-tab-justify" data-toggle="tab" href="#profile-justify" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="contact-tab-justify" data-toggle="tab" href="#contact-justify" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                     </ul>
                     <div class="tab-content" id="myTabContent-3">
                        <div class="tab-pane fade show active" id="home-justify" role="tabpanel" aria-labelledby="home-tab-justify">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="profile-justify" role="tabpanel" aria-labelledby="profile-tab-justify">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="contact-justify" role="tabpanel" aria-labelledby="contact-tab-justify">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Basic Tabs Style 2</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="basic-tabs-style-2" class="text-white"><code>
&#x3C;ul class=&#x22;nav nav-pills mb-3&#x22; id=&#x22;pills-tab&#x22; role=&#x22;tablist&#x22;&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;pills-home-tab&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#pills-home&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;pills-home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;pills-profile-tab&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#pills-profile&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;pills-profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;pills-contact-tab&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#pills-contact&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;pills-contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;div class=&#x22;tab-content&#x22; id=&#x22;pills-tabContent-2&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;pills-home&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;pills-home-tab&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;pills-profile&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;pills-profile-tab&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;pills-contact&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;pills-contact-tab&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>
                     <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                        </li>
                     </ul>
                     <div class="tab-content" id="pills-tabContent-2">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Basic Tabs Style 4</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="basic-tabs-style-4" class="text-white"><code>
&#x3C;ul class=&#x22;nav nav-tabs&#x22; id=&#x22;myTab-three&#x22; role=&#x22;tablist&#x22;&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;home-tab-three&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#home-three&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;profile-tab-three&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#profile-three&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;contact-tab-three&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#contact-three&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;div class=&#x22;tab-content&#x22; id=&#x22;myTabContent-4&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;home-three&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;home-tab-three&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;profile-three&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;profile-tab-three&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;contact-three&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;contact-tab-three&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
                     <ul class="nav nav-tabs" id="myTab-three" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" id="home-tab-three" data-toggle="tab" href="#home-three" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="profile-tab-three" data-toggle="tab" href="#profile-three" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="contact-tab-three" data-toggle="tab" href="#contact-three" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                     </ul>
                     <div class="tab-content" id="myTabContent-4">
                        <div class="tab-pane fade show active" id="home-three" role="tabpanel" aria-labelledby="home-tab-three">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="profile-three" role="tabpanel" aria-labelledby="profile-tab-three">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="contact-three" role="tabpanel" aria-labelledby="contact-tab-three">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Tabs Fill and justify</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-7" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-7">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="tabs-fill-and-justify" class="text-white"><code>
&#x3C;ul class=&#x22;nav nav-pills mb-3 nav-fill&#x22; id=&#x22;pills-tab-1&#x22; role=&#x22;tablist&#x22;&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;pills-home-tab-fill&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#pills-home-fill&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;pills-home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;pills-profile-tab-fill&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#pills-profile-fill&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;pills-profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;pills-contact-tab-fill&#x22; data-toggle=&#x22;pill&#x22; href=&#x22;#pills-contact-fill&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;pills-contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;div class=&#x22;tab-content&#x22; id=&#x22;pills-tabContent-1&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;pills-home-fill&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;pills-home-tab-fill&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;pills-profile-fill&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;pills-profile-tab-fill&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;pills-contact-fill&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;pills-contact-tab-fill&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Force your <code>.nav</code>’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
                     <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab-1" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" id="pills-home-tab-fill" data-toggle="pill" href="#pills-home-fill" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="pills-profile-tab-fill" data-toggle="pill" href="#pills-profile-fill" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="pills-contact-tab-fill" data-toggle="pill" href="#pills-contact-fill" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                        </li>
                     </ul>
                     <div class="tab-content" id="pills-tabContent-1">
                        <div class="tab-pane fade show active" id="pills-home-fill" role="tabpanel" aria-labelledby="pills-home-tab-fill">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="pills-profile-fill" role="tabpanel" aria-labelledby="pills-profile-tab-fill">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="pills-contact-fill" role="tabpanel" aria-labelledby="pills-contact-tab-fill">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Tabs Justify Right</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#tabs-8" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="tabs-8">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="tabs-justify-right" class="text-white"><code>
&#x3C;ul class=&#x22;nav nav-tabs justify-content-end&#x22; id=&#x22;myTab-4&#x22; role=&#x22;tablist&#x22;&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link active&#x22; id=&#x22;home-tab-end&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#home-end&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;profile-tab-end&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#profile-end&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
      &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;contact-tab-end&#x22; data-toggle=&#x22;tab&#x22; href=&#x22;#contact-end&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/a&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;div class=&#x22;tab-content&#x22; id=&#x22;myTabContent-5&#x22;&#x3E;
   &#x3C;div class=&#x22;tab-pane fade show active&#x22; id=&#x22;home-end&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;home-tab-end&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;profile-end&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;profile-tab-end&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;tab-pane fade&#x22; id=&#x22;contact-end&#x22; role=&#x22;tabpanel&#x22; aria-labelledby=&#x22;contact-tab-end&#x22;&#x3E;
      &#x3C;p&#x3E;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Right-aligned with <code>.justify-content-end</code>.</p>
                     <ul class="nav nav-tabs justify-content-end" id="myTab-4" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" id="home-tab-end" data-toggle="tab" href="#home-end" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="profile-tab-end" data-toggle="tab" href="#profile-end" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" id="contact-tab-end" data-toggle="tab" href="#contact-end" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                     </ul>
                     <div class="tab-content" id="myTabContent-5">
                        <div class="tab-pane fade show active" id="home-end" role="tabpanel" aria-labelledby="home-tab-end">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="profile-end" role="tabpanel" aria-labelledby="profile-tab-end">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="tab-pane fade" id="contact-end" role="tabpanel" aria-labelledby="contact-tab-end">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
