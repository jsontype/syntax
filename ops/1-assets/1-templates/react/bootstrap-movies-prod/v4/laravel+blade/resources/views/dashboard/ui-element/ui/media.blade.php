<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Equal-width multi-row</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#media-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="media-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="equal-width" class="text-white"><code>
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/14.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;Media heading&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/13.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;Media heading&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
      &#x3C;div class=&#x22;media mt-3&#x22;&#x3E;
         &#x3C;a class=&#x22;mr-3&#x22; href=&#x22;#&#x22;&#x3E;
         &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/12.jpg")}}&#x22; alt=&#x22;#&#x22; class=&#x22;avatar-70 img-fluid rounded&#x22;&#x3E;
         &#x3C;/a&#x3E;
         &#x3C;div class=&#x22;media-body&#x22;&#x3E;
            &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;Media heading&#x3C;/h5&#x3E;
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display utilities</a>.</p>
                     <div class="media">
                        <img src="{{URL::asset("dashboard/images/page-img/15.jpg")}}" class="mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mb-1">Media heading</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                     </div>
                     <div class="media">
                        <img src="{{URL::asset("dashboard/images/page-img/16.jpg")}}" class="mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mb-1">Media heading</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           <div class="media mt-3">
                              <a class="mr-3" href="#">
                              <img src="{{URL::asset("dashboard/images/page-img/17.jpg")}}" alt="#" class="avatar-70 img-fluid rounded">
                              </a>
                              <div class="media-body">
                                 <h5 class="mb-1">Media heading</h5>
                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Order</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#media-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="media-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="order" class="text-white"><code>
&#x3C;div class=&#x22;media mb-5&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;Media object&#x3C;/h5&#x3E;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   &#x3C;/div&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/14.jpg")}}&#x22; class=&#x22;ml-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media mb-5&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;Center-aligned media&#x3C;/h5&#x3E;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   &#x3C;/div&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/12.jpg")}}&#x22; class=&#x22;align-self-center mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;Bottom-aligned media&#x3C;/h5&#x3E;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   &#x3C;/div&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/11.jpg")}}&#x22; class=&#x22;align-self-end mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>
                     <div class="media mb-5">
                        <div class="media-body">
                           <h5 class="mt-0 mb-1">Media object</h5>
                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src="{{URL::asset("dashboard/images/page-img/18.jpg")}}" class="ml-3 avatar-70 img-fluid rounded" alt="#">
                     </div>
                     <div class="media mb-5">
                        <div class="media-body">
                           <h5 class="mt-0 mb-1">Center-aligned media</h5>
                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src="{{URL::asset("dashboard/images/page-img/19.jpg")}}" class="align-self-center mr-3 avatar-70 img-fluid rounded" alt="#">
                     </div>
                     <div class="media">
                        <div class="media-body">
                           <h5 class="mt-0 mb-1">Bottom-aligned media</h5>
                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src="{{URL::asset("dashboard/images/page-img/20.jpg")}}" class="align-self-end mr-3 avatar-70 img-fluid rounded" alt="#">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Media object</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#media-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="media-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="media-object" class="text-white"><code>
&#x3C;div class=&#x22;media mb-4&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/09.jpg")}}&#x22; class=&#x22;align-self-start mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;Top-aligned media&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media mb-4&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/10.jpg")}}&#x22; class=&#x22;align-self-center rounded mr-3 avatar-70 rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;Center-aligned media&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/11.jpg")}}&#x22; class=&#x22;align-self-end rounded mr-3 avatar-70 rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;Bottom-aligned media&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>
                     <div class="media mb-4">
                        <img src="{{URL::asset("dashboard/images/page-img/21.jpg")}}" class="align-self-start mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mb-1">Top-aligned media</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                     </div>
                     <div class="media mb-4">
                        <img src="{{URL::asset("dashboard/images/page-img/22.jpg")}}" class="align-self-center rounded mr-3 avatar-70 rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mb-1">Center-aligned media</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                     </div>
                     <div class="media">
                        <img src="{{URL::asset("dashboard/images/page-img/23.jpg")}}" class="align-self-end rounded mr-3 avatar-70 rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mb-1">Bottom-aligned media</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Media list</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#media-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="media-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="media-list" class="text-white"><code>
&#x3C;ul class=&#x22;list-unstyled&#x22;&#x3E;
   &#x3C;li class=&#x22;media&#x22;&#x3E;
      &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/12.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;div class=&#x22;media-body&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;List-based media object&#x3C;/h5&#x3E;
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      &#x3C;/div&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;media my-4&#x22;&#x3E;
      &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/14.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;div class=&#x22;media-body&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;List-based media object&#x3C;/h5&#x3E;
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      &#x3C;/div&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;media&#x22;&#x3E;
      &#x3C;img src=&#x22;{{URL::asset("dashboard/images/page-img/13.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;div class=&#x22;media-body&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;List-based media object&#x3C;/h5&#x3E;
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      &#x3C;/div&#x3E;
   &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the <code>.list-unstyled</code> to remove any browser default list styles, and then apply <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever needed to fine tune.</p>
                     <ul class="list-unstyled">
                        <li class="media">
                           <img src="{{URL::asset("dashboard/images/page-img/24.jpg")}}" class="mr-3 avatar-70 img-fluid rounded" alt="#">
                           <div class="media-body">
                              <h5 class="mt-0 mb-1">List-based media object</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </div>
                        </li>
                        <li class="media my-4">
                           <img src="{{URL::asset("dashboard/images/page-img/15.jpg")}}" class="mr-3 avatar-70 img-fluid rounded" alt="#">
                           <div class="media-body">
                              <h5 class="mt-0 mb-1">List-based media object</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </div>
                        </li>
                        <li class="media">
                           <img src="{{URL::asset("dashboard/images/page-img/16.jpg")}}" class="mr-3 avatar-70 img-fluid rounded" alt="#">
                           <div class="media-body">
                              <h5 class="mt-0 mb-1">List-based media object</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
