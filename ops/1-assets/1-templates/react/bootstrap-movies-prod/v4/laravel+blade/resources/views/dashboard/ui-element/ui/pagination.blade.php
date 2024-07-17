<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Pagination Examples</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#pagination-1" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="pagination-1">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="pagination-example" class="text-white"><code>
&#x3C;nav aria-label=&#x22;Page navigation example&#x22;&#x3E;
   &#x3C;ul class=&#x22;pagination mb-0&#x22;&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;Previous&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;1&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;2&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;3&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;Next&#x3C;/a&#x3E;&#x3C;/li&#x3E;
   &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination mb-0">
                           <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Disabled and active states</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#pagination-2" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="pagination-2">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="disabled-and-active-state" class="text-white"><code>
&#x3C;nav aria-label=&#x22;...&#x22;&#x3E;
   &#x3C;ul class=&#x22;pagination&#x22;&#x3E;
      &#x3C;li class=&#x22;page-item disabled&#x22;&#x3E;
         &#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22; tabindex=&#x22;-1&#x22; aria-disabled=&#x22;true&#x22;&#x3E;Previous&#x3C;/a&#x3E;
      &#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;1&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;
         &#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;2 &#x3C;span class=&#x22;sr-only&#x22;&#x3E;(current)&#x3C;/span&#x3E;&#x3C;/a&#x3E;
      &#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;3&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;
         &#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;Next&#x3C;/a&#x3E;
      &#x3C;/li&#x3E;
   &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.</p>
                     <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.</p>
                     <nav aria-label="...">
                        <ul class="pagination">
                           <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item active" aria-current="page">
                              <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                           </li>
                        </ul>
                     </nav>
                     <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>
                     <nav aria-label="...">
                        <ul class="pagination">
                           <li class="page-item disabled">
                              <span class="page-link">Previous</span>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item active" aria-current="page">
                              <span class="page-link">
                              2
                              <span class="sr-only">(current)</span>
                              </span>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Pagination With Color</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#pagination-3" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="pagination-3">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="pagination-with-color" class="text-white"><code>
&#x3C;nav aria-label=&#x22;Page navigation example&#x22;&#x3E;
   &#x3C;ul class=&#x22;pagination&#x22;&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link border-primary bg-primary text-white&#x22; href=&#x22;#&#x22;&#x3E;Previous&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link border-primary bg-primary text-white&#x22; href=&#x22;#&#x22;&#x3E;1&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link border-primary bg-primary text-white&#x22; href=&#x22;#&#x22;&#x3E;2&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link border-primary bg-primary text-white&#x22; href=&#x22;#&#x22;&#x3E;3&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link border-primary bg-primary text-white&#x22; href=&#x22;#&#x22;&#x3E;Next&#x3C;/a&#x3E;&#x3C;/li&#x3E;
   &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination">
                           <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">Previous</a></li>
                           <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">1</a></li>
                           <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">2</a></li>
                           <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">3</a></li>
                           <li class="page-item"><a class="page-link border-primary bg-primary text-white" href="#">Next</a></li>
                        </ul>
                     </nav>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination">
                           <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">Previous</a></li>
                           <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">1</a></li>
                           <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">2</a></li>
                           <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">3</a></li>
                           <li class="page-item"><a class="page-link border-success bg-success text-white" href="#">Next</a></li>
                        </ul>
                     </nav>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination mb-0 ">
                           <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">Previous</a></li>
                           <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">1</a></li>
                           <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">2</a></li>
                           <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">3</a></li>
                           <li class="page-item"><a class="page-link border-info bg-info text-white" href="#">Next</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Working with icons</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#pagination-4" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="pagination-4">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="working-with-icons" class="text-white"><code>
&#x3C;nav aria-label=&#x22;Page navigation example&#x22;&#x3E;
   &#x3C;ul class=&#x22;pagination mb-0&#x22;&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;
         &#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22; aria-label=&#x22;Previous&#x22;&#x3E;
         &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;laquo;&#x3C;/span&#x3E;
         &#x3C;/a&#x3E;
      &#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;1&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;2&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;3&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;
         &#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22; aria-label=&#x22;Next&#x22;&#x3E;
         &#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#x26;raquo;&#x3C;/span&#x3E;
         &#x3C;/a&#x3E;
      &#x3C;/li&#x3E;
   &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination mb-0">
                           <li class="page-item">
                              <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                              </a>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Pagination Sizing</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#pagination-5" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="pagination-5">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="pagination-sizing" class="text-white"><code>
&#x3C;nav aria-label=&#x22;...&#x22;&#x3E;
   &#x3C;ul class=&#x22;pagination pagination-lg&#x22;&#x3E;
      &#x3C;li class=&#x22;page-item active&#x22; aria-current=&#x22;page&#x22;&#x3E;
         &#x3C;span class=&#x22;page-link&#x22;&#x3E;
         1
         &#x3C;span class=&#x22;sr-only&#x22;&#x3E;(current)&#x3C;/span&#x3E;
         &#x3C;/span&#x3E;
      &#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;2&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;3&#x3C;/a&#x3E;&#x3C;/li&#x3E;
   &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
                     <nav aria-label="...">
                        <ul class="pagination pagination-lg">
                           <li class="page-item active" aria-current="page">
                              <span class="page-link">
                              1
                              <span class="sr-only">(current)</span>
                              </span>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                     </nav>
                     <nav aria-label="...">
                        <ul class="pagination">
                           <li class="page-item active" aria-current="page">
                              <span class="page-link">
                              1
                              <span class="sr-only">(current)</span>
                              </span>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                     </nav>
                     <nav aria-label="...">
                        <ul class="pagination pagination-sm">
                           <li class="page-item active" aria-current="page">
                              <span class="page-link">
                              1
                              <span class="sr-only">(current)</span>
                              </span>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Alignment</h4>
                     </div>
                  <div class="header-action">
                           <i  type="button" data-toggle="collapse" data-target="#pagination-6" aria-expanded="false" aria-controls="alert-1">
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </div>
                  </div>
                  <div class="iq-card-body">
                     <div class="collapse" id="pagination-6">
                           <div class="iq-card"><kbd class="bg-dark"><pre id="alignment" class="text-white"><code>
&#x3C;h6&#x3E;left&#x3C;/h6&#x3E;
&#x3C;nav aria-label=&#x22;Page navigation example&#x22;&#x3E;
   &#x3C;ul class=&#x22;pagination&#x22;&#x3E;
      &#x3C;li class=&#x22;page-item disabled&#x22;&#x3E;
         &#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22; tabindex=&#x22;-1&#x22; aria-disabled=&#x22;true&#x22;&#x3E;Previous&#x3C;/a&#x3E;
      &#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;1&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;2&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;&#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;3&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;li class=&#x22;page-item&#x22;&#x3E;
         &#x3C;a class=&#x22;page-link&#x22; href=&#x22;#&#x22;&#x3E;Next&#x3C;/a&#x3E;
      &#x3C;/li&#x3E;
   &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre></kbd></div>
                        </div>
                     <p>Change the alignment of pagination components with <a href="/docs/4.3/utilities/flex/">flexbox utilities</a>.</p>
                     <h6>left</h6>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination">
                           <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                           </li>
                        </ul>
                     </nav>
                     <h6 class="text-center">Center</h6>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                           <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                           </li>
                        </ul>
                     </nav>
                     <h6 class="text-right">Right</h6>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                           <li class="page-item disabled">
                              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                           </li>
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
</x-layouts.dashboard>
