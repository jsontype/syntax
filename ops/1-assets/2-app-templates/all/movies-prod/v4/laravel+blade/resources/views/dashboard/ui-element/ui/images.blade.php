<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6 col-md-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Responsive images</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#images-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="images-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="responsive-images" class="text-white"><code>
&#x3C;img src=&#x22;{{URL::asset("dashboard/images/small/img-1.jpg")}}&#x22; class=&#x22;img-fluid rounded&#x22; alt=&#x22;Responsive image&#x22;&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
                     <img src={{URL::asset("dashboard/images/small/img-1.jpg")}} class="img-fluid rounded" alt="Responsive image">
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Equal-width multi-row</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#images-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="images-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="Equal-width" class="text-white"><code>
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("/dashboard/images/page-img/1.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0&#x22;&#x3E;Media heading&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("/dashboard/images/page-img/2.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0&#x22;&#x3E;Media heading&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
      &#x3C;div class=&#x22;media mt-3&#x22;&#x3E;
         &#x3C;a class=&#x22;mr-3&#x22; href=&#x22;#&#x22;&#x3E;
         &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/3.jpg")}}&#x22; alt=&#x22;#&#x22; class=&#x22;avatar-70 img-fluid rounded&#x22;&#x3E;
         &#x3C;/a&#x3E;
         &#x3C;div class=&#x22;media-body&#x22;&#x3E;
            &#x3C;h5 class=&#x22;mt-0&#x22;&#x3E;Media heading&#x3C;/h5&#x3E;
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display utilities</a>.</p>
                     <div class="media">
                        <img src={{URL::asset("/dashboard/images/page-img/15.jpg")}} class="mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mt-0">Media heading</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                     </div>
                     <div class="media">
                        <img src={{URL::asset("/dashboard/images/page-img/16.jpg")}} class="mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mt-0">Media heading</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           <div class="media mt-3">
                              <a class="mr-3" href="#">
                              <img src={{URL::asset("/dashboard/images/page-img/17.jpg")}} alt="#" class="avatar-70 img-fluid rounded">
                              </a>
                              <div class="media-body">
                                 <h5 class="mt-0">Media heading</h5>
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
                           <i  type="button" data-toggle="collapse" data-target="#images-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="images-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="order" class="text-white"><code>
&#x3C;div class=&#x22;media mb-5&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;Media object&#x3C;/h5&#x3E;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   &#x3C;/div&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("/dashboard/images/page-img/09.jpg")}}&#x22; class=&#x22;ml-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media mb-5&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;Center-aligned media&#x3C;/h5&#x3E;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   &#x3C;/div&#x3E;
   &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/10.jpg")}}&#x22; class=&#x22;align-self-center mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;Bottom-aligned media&#x3C;/h5&#x3E;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   &#x3C;/div&#x3E;
   &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/11.jpg")}}&#x22; class=&#x22;align-self-end mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>
                     <div class="media mb-5">
                        <div class="media-body">
                           <h5 class="mt-0 mb-1">Media object</h5>
                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src={{URL::asset("/dashboard/images/page-img/18.jpg")}} class="ml-3 avatar-70 img-fluid rounded" alt="#">
                     </div>
                     <div class="media mb-5">
                        <div class="media-body">
                           <h5 class="mt-0 mb-1">Center-aligned media</h5>
                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src={{url::asset("/dashboard/images/page-img/19.jpg")}} class="align-self-center mr-3 avatar-70 img-fluid rounded" alt="#">
                     </div>
                     <div class="media">
                        <div class="media-body">
                           <h5 class="mt-0 mb-1">Bottom-aligned media</h5>
                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img src={{url::asset("/dashboard/images/page-img/20.jpg")}} class="align-self-end mr-3 avatar-70 img-fluid rounded" alt="#">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Image thumbnails</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#images-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="images-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="image-thumbnail" class="text-white"><code>
&#x3C;ul class=&#x22;list-unstyled p-0 m-0 row&#x22;&#x3E;
   &#x3C;li class=&#x22;col-lg-4 col-md-6 col-sm-6 mt-2&#x22;&#x3E;&#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/10.jpg")}}&#x22; class=&#x22;img-thumbnail w-100 img-fluid rounded&#x22; alt=&#x22;Responsive image&#x22;&#x3E;&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;col-lg-4 col-md-6 col-sm-6 mt-2&#x22;&#x3E;&#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/11.jpg")}}&#x22; class=&#x22;rounded w-100 img-fluid rounded&#x22; alt=&#x22;Responsive image&#x22;&#x3E;&#x3C;/li&#x3E;
   &#x3C;li class=&#x22;col-lg-4 col-md-6 col-sm-6 mt-2&#x22;&#x3E;&#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/12.jpg")}}&#x22; class=&#x22;rounded w-100 img-fluid rounded&#x22; alt=&#x22;Responsive image&#x22;&#x3E;&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>In addition to our <a href="/docs/4.3/utilities/borders/">border-radius utilities</a>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
                     <ul class="list-unstyled p-0 m-0 row">
                        <li class="col-lg-4 col-md-6 col-sm-6 mt-2"><img src={{url::asset("/dashboard/images/page-img/10.jpg")}} class="img-thumbnail w-100 img-fluid rounded" alt="Responsive image"></li>
                        <li class="col-lg-4 col-md-6 col-sm-6 mt-2"><img src={{url::asset("/dashboard/images/page-img/11.jpg")}} class="rounded w-100 img-fluid rounded" alt="Responsive image"></li>
                        <li class="col-lg-4 col-md-6 col-sm-6 mt-2"><img src={{url::asset("/dashboard/images/page-img/12.jpg")}} class="rounded w-100 img-fluid rounded" alt="Responsive image"></li>
                     </ul>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Image thumbnails</h4>
                     </div>
                 <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#images-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="images-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="image-thumbnails" class="text-white"><code>
&#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/13.jpg")}}&#x22; class=&#x22; mt-2 img-fluid rounded&#x22; alt=&#x22;Responsive image&#x22;&#x3E;
&#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/14.jpg")}}&#x22; class=&#x22; mt-2 img-fluid rounded float-right&#x22; alt=&#x22;Responsive image&#x22;&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>In addition to our <a href="/docs/4.3/utilities/borders/">border-radius utilities</a>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
                     <img src="{{url::asset("/dashboard/images/page-img/13.jpg")}}" class=" mt-2 img-fluid rounded" alt="Responsive image">
                     <img src="{{url::asset("/dashboard/images/page-img/14.jpg")}}" class=" mt-2 img-fluid rounded float-right" alt="Responsive image">
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Media object</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#images-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="images-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="media-object" class="text-white"><code>
&#x3C;div class=&#x22;media mb-4&#x22;&#x3E;
   &#x3C;img src=&#x22;{{URL::asset("/dashboard/images/page-img/09.jpg")}}&#x22; class=&#x22;align-self-start mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0&#x22;&#x3E;Top-aligned media&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media mb-4&#x22;&#x3E;
   &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/10.jpg")}}&#x22; class=&#x22;align-self-center mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0&#x22;&#x3E;Center-aligned media&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;media&#x22;&#x3E;
   &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/11.jpg")}}&#x22; class=&#x22;align-self-end mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
   &#x3C;div class=&#x22;media-body&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mt-0&#x22;&#x3E;Bottom-aligned media&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&#x3C;/p&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>
                     <div class="media mb-4">
                        <img src={{URL::asset("/dashboard/images/page-img/21.jpg")}} class="align-self-start mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mt-0">Top-aligned media</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                     </div>
                     <div class="media mb-4">
                        <img src={{url::asset("/dashboard/images/page-img/22.jpg")}} class="align-self-center mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mt-0">Center-aligned media</h5>
                           <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                     </div>
                     <div class="media">
                        <img src={{url::asset("/dashboard/images/page-img/23.jpg")}} class="align-self-end mr-3 avatar-70 img-fluid rounded" alt="#">
                        <div class="media-body">
                           <h5 class="mt-0">Bottom-aligned media</h5>
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
                           <i  type="button" data-toggle="collapse" data-target="#images-7" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="images-7">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="media-list" class="text-white"><code>
&#x3C;ul class=&#x22;list-unstyled&#x22;&#x3E;
   &#x3C;li class=&#x22;media&#x22;&#x3E;
      &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/12.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;div class=&#x22;media-body&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;List-based media object&#x3C;/h5&#x3E;
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      &#x3C;/div&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;media my-4&#x22;&#x3E;
      &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/13.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
      &#x3C;div class=&#x22;media-body&#x22;&#x3E;
         &#x3C;h5 class=&#x22;mt-0 mb-1&#x22;&#x3E;List-based media object&#x3C;/h5&#x3E;
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      &#x3C;/div&#x3E;
   &#x3C;/li&#x3E;
   &#x3C;li class=&#x22;media&#x22;&#x3E;
      &#x3C;img src=&#x22;{{url::asset("/dashboard/images/page-img/14.jpg")}}&#x22; class=&#x22;mr-3 avatar-70 img-fluid rounded&#x22; alt=&#x22;#&#x22;&#x3E;
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
                           <img src={{url::asset("/dashboard/images/page-img/24.jpg")}} class="mr-3 avatar-70 img-fluid rounded" alt="#">
                           <div class="media-body">
                              <h5 class="mt-0 mb-1">List-based media object</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </div>
                        </li>
                        <li class="media my-4">
                           <img src={{url::asset("/dashboard/images/page-img/15.jpg")}} class="mr-3 avatar-70 img-fluid rounded" alt="#">
                           <div class="media-body">
                              <h5 class="mt-0 mb-1">List-based media object</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </div>
                        </li>
                        <li class="media">
                           <img src={{url::asset("/dashboard/images/page-img/16.jpg")}} class="mr-3 avatar-70 img-fluid rounded" alt="#">
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
