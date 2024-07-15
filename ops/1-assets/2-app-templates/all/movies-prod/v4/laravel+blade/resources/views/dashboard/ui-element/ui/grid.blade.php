<x-layouts.dashboard>
   <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12">
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Grid options</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table..</p>
                     <table class="table table-bordered table-striped">
                        <thead>
                           <tr>
                              <th></th>
                              <th class="text-center">
                                 Extra small<br>
                                 <small>&lt;576px</small>
                              </th>
                              <th class="text-center">
                                 Small<br>
                                 <small>≥576px</small>
                              </th>
                              <th class="text-center">
                                 Medium<br>
                                 <small>≥768px</small>
                              </th>
                              <th class="text-center">
                                 Large<br>
                                 <small>≥992px</small>
                              </th>
                              <th class="text-center">
                                 Extra large<br>
                                 <small>≥1200px</small>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th class="text-nowrap text-left" scope="row">Max container width</th>
                              <td>None (auto)</td>
                              <td>540px</td>
                              <td>720px</td>
                              <td>960px</td>
                              <td>1140px</td>
                           </tr>
                           <tr>
                              <th class="text-nowrap text-left" scope="row">Class prefix</th>
                              <td><code>.col-</code></td>
                              <td><code>.col-sm-</code></td>
                              <td><code>.col-md-</code></td>
                              <td><code>.col-lg-</code></td>
                              <td><code>.col-xl-</code></td>
                           </tr>
                           <tr>
                              <th class="text-nowrap text-left" scope="row"># of columns</th>
                              <td colspan="5" class="text-left" >12</td>
                           </tr>
                           <tr>
                              <th class="text-nowrap text-left" scope="row">Gutter width</th>
                              <td colspan="5" class="text-left">30px (15px on each side of a column)</td>
                           </tr>
                           <tr>
                              <th class="text-nowrap text-left" scope="row">Nestable</th>
                              <td colspan="5" class="text-left">Yes</td>
                           </tr>
                           <tr>
                              <th class="text-nowrap text-left" scope="row">Column ordering</th>
                              <td colspan="5" class="text-left">Yes</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Equal-width</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to <code>xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                           <div class="row mb-3">
                              <div class="col-12 col-md-8">.col-12 .col-md-8</div>
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                           </div>
                           <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
                           <div class="row mb-3">
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                           </div>
                           <!-- Columns are always 50% wide, on mobile and desktop -->
                           <div class="row">
                              <div class="col-6">.col-6</div>
                              <div class="col-6">.col-6</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Setting one column width</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <div class="row mb-3">
                              <div class="col">
                                 1 of 3
                              </div>
                              <div class="col-6">
                                 2 of 3 (wider)
                              </div>
                              <div class="col">
                                 3 of 3
                              </div>
                           </div>
                           <div class="row">
                              <div class="col">
                                 1 of 3
                              </div>
                              <div class="col-5">
                                 2 of 3 (wider)
                              </div>
                              <div class="col">
                                 3 of 3
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Variable width content</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Use <code>col-{breakpoint}-auto</code> classes to size columns based on the natural width of their content.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <div class="row justify-content-md-center mb-3">
                              <div class="col col-lg-2">
                                 1 of 3
                              </div>
                              <div class="col-md-auto">
                                 Variable width content
                              </div>
                              <div class="col col-lg-2">
                                 3 of 3
                              </div>
                           </div>
                           <div class="row">
                              <div class="col">
                                 1 of 3
                              </div>
                              <div class="col-md-auto">
                                 Variable width content
                              </div>
                              <div class="col col-lg-2">
                                 3 of 3
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Equal-width multi-row</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="https://getbootstrap.com/" target="_blank">responsive display utilities</a>.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <div class="row">
                              <div class="col">col</div>
                              <div class="col">col</div>
                              <div class="w-100"></div>
                              <div class="col">col</div>
                              <div class="col">col</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Responsive classes</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>
                     <h4 class="card-title">All breakpoints</h4>
                     <p>For grids that are the same from the smallest of devices to the largest, use the <code>.col</code> and <code>.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code>.col</code>.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <div class="row mb-3">
                              <div class="col">col</div>
                              <div class="col">col</div>
                              <div class="col">col</div>
                              <div class="col">col</div>
                           </div>
                           <div class="row">
                              <div class="col-8">col-8</div>
                              <div class="col-4">col-4</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Stacked to horizontal</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Using a single set of <code>.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code>sm</code>).</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <div class="row mb-3">
                              <div class="col-sm-8">col-sm-8</div>
                              <div class="col-sm-4">col-sm-4</div>
                           </div>
                           <div class="row">
                              <div class="col-sm">col-sm</div>
                              <div class="col-sm">col-sm</div>
                              <div class="col-sm">col-sm</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Mix and match</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                           <div class="row mb-3">
                              <div class="col-12 col-md-8">.col-12 .col-md-8</div>
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                           </div>
                           <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
                           <div class="row mb-3">
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                              <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                           </div>
                           <!-- Columns are always 50% wide, on mobile and desktop -->
                           <div class="row">
                              <div class="col-6">.col-6</div>
                              <div class="col-6">.col-6</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Gutters</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the <code>.row</code> and matching padding utilities on the <code>.col</code>s. The <code>.container</code> or <code>.container-fluid</code> parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.</p>
                     <p>Here’s an example of customizing the Bootstrap grid at the large (<code>lg</code>) breakpoint and above. We’ve increased the <code>.col</code> padding with <code>.px-lg-5</code>, counteracted that with <code>.mx-lg-n5</code> on the parent <code>.row</code> and then adjusted the <code>.container</code> wrapper with <code>.px-lg-5</code>.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid px-lg-5">
                           <div class="row mx-lg-n5">
                              <div class="col py-3 px-lg-5 border bg-light">Custom column padding</div>
                              <div class="col py-3 px-lg-5 border bg-light">Custom column padding</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Alignment</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Use flexbox alignment utilities to vertically and horizontally align columns. <strong>Internet Explorer 10-11 do not support vertical alignment of flex items when the flex container has a <code>min-height</code> as shown below.</strong> <a href="https://github.com/philipwalton/flexbugs#flexbug-3">See Flexbugs #3 for more details.</a></p>
                     <h4 class="mb-3">Vertical alignment</h4>
                     <div class="iq-example-row iq-example-row-flex-cols">
                        <div class="container-fluid">
                           <div class="row align-items-start">
                              <div class="col">
                                 One of three columns
                              </div>
                              <div class="col">
                                 One of three columns
                              </div>
                              <div class="col">
                                 One of three columns
                              </div>
                           </div>
                           <div class="row align-items-center">
                              <div class="col">
                                 One of three columns
                              </div>
                              <div class="col">
                                 One of three columns
                              </div>
                              <div class="col">
                                 One of three columns
                              </div>
                           </div>
                           <div class="row align-items-end">
                              <div class="col">
                                 One of three columns
                              </div>
                              <div class="col">
                                 One of three columns
                              </div>
                              <div class="col">
                                 One of three columns
                              </div>
                           </div>
                        </div>
                        <div class="container-fluid">
                           <div class="row">
                              <div class="col align-self-start">
                                 One of three columns
                              </div>
                              <div class="col align-self-center">
                                 One of three columns
                              </div>
                              <div class="col align-self-end">
                                 One of three columns
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="iq-card">
                  <div class="iq-card-header d-flex justify-content-between">
                     <div class="iq-header-title">
                        <h4 class="card-title">Horizontal alignment</h4>
                     </div>
                  </div>
                  <div class="iq-card-body">
                     <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display utilities</a>.</p>
                     <div class="iq-example-row">
                        <div class="container-fluid">
                           <div class="row justify-content-start mb-3">
                              <div class="col-4">
                                 One of two columns
                              </div>
                              <div class="col-4">
                                 One of two columns
                              </div>
                           </div>
                           <div class="row justify-content-center mb-3">
                              <div class="col-4">
                                 One of two columns
                              </div>
                              <div class="col-4">
                                 One of two columns
                              </div>
                           </div>
                           <div class="row justify-content-end mb-3">
                              <div class="col-4">
                                 One of two columns
                              </div>
                              <div class="col-4">
                                 One of two columns
                              </div>
                           </div>
                           <div class="row justify-content-around mb-3">
                              <div class="col-4">
                                 One of two columns
                              </div>
                              <div class="col-4">
                                 One of two columns
                              </div>
                           </div>
                           <div class="row justify-content-between">
                              <div class="col-4">
                                 One of two columns
                              </div>
                              <div class="col-4">
                                 One of two columns
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
