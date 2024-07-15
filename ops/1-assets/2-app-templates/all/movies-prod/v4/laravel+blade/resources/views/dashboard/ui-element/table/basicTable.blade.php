<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
           <div class="col-sm-12 col-lg-6">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Tables</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>The <code>.table </code> class adds basic styling to a table.</p>
                    <table class="table">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td>Larry</td>
                             <td>the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Table Head Options</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Similar to tables and dark tables, use the modifier classes <code class="highlighter-rouge">.thead-light</code> or <code class="highlighter-rouge">.thead-dark</code> to make <code class="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.</p>
                    <table class="table">
                       <thead class="thead-dark">
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td>Larry</td>
                             <td>the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                    <table class="table">
                       <thead class="thead-light">
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td>Larry</td>
                             <td>the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Borderless table</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Add <code class="highlighter-rouge">.table-borderless</code> for a table without borders.</p>
                    <table class="table table-borderless">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td colspan="2">Larry the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                    <p><code class="highlighter-rouge">.table-borderless</code> can also be used on dark tables.</p>
                    <table class="table table-borderless table-dark">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td colspan="2">Larry the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Small table</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Add <code class="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
                    <table class="table table-sm">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td colspan="2">Larry the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                    <table class="table table-sm table-dark">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td colspan="2">Larry the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Captions</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>A <code class="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
                    <table class="table">
                       <caption>List of users</caption>
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td>Larry</td>
                             <td>the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
           <div class="col-sm-12 col-lg-6">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Table Dark</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>You can also invert the colors—with light text on dark backgrounds—with <code class="highlighter-rouge">.table-dark</code>.</p>
                    <table class="table table-dark">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td>Larry</td>
                             <td>the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Striped Rows</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Use <code class="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                    <table class="table table-striped">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td>Larry</td>
                             <td>the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                    <table class="table table-striped table-dark">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td>Larry</td>
                             <td>the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Hoverable rows</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Add <code class="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                    <table class="table table-hover">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td colspan="2">Larry the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                    <table class="table table-hover table-dark">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">First</th>
                             <th scope="col">Last</th>
                             <th scope="col">Handle</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                             <td>@mdo</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                          </tr>
                          <tr>
                             <th scope="row">3</th>
                             <td colspan="2">Larry the Bird</td>
                             <td>@twitter</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Contextual classes</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Use contextual classes to color table rows or individual cells.</p>
                    <table class="table">
                       <thead>
                          <tr>
                             <th scope="col">Class</th>
                             <th scope="col">Heading</th>
                             <th scope="col">Heading</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr class="table-active">
                             <th scope="row">Active</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr>
                             <th scope="row">Default</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="table-primary iq-color-primary">
                             <th scope="row">Primary</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="table-secondary iq-color-primary">
                             <th scope="row">Secondary</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="table-success iq-color-primary">
                             <th scope="row">Success</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="table-danger iq-color-primary">
                             <th scope="row">Danger</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="table-warning iq-color-primary">
                             <th scope="row">Warning</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="table-info iq-color-primary">
                             <th scope="row">Info</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                       </tbody>
                    </table>
                    <p>Regular table background variants are not available with the dark table, however, you may use <a href="https://getbootstrap.com/" target="_blank">text or background utilities</a> to achieve similar styles.</p>
                    <table class="table table-dark">
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">Heading</th>
                             <th scope="col">Heading</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr class="bg-primary">
                             <th scope="row">1</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr>
                             <th scope="row">2</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="bg-success">
                             <th scope="row">3</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr>
                             <th scope="row">4</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="bg-info">
                             <th scope="row">5</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr>
                             <th scope="row">6</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="bg-warning">
                             <th scope="row">7</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr>
                             <th scope="row">8</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                          <tr class="bg-danger">
                             <th scope="row">9</th>
                             <td>Cell</td>
                             <td>Cell</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
           <div class="col-sm-12">
              <div class="iq-card">
                 <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                       <h4 class="card-title">Responsive tables</h4>
                    </div>
                 </div>
                 <div class="iq-card-body">
                    <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code class="highlighter-rouge">.table</code> with <code class="highlighter-rouge">.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code class="highlighter-rouge">.table-responsive{-sm|-md|-lg|-xl}</code>.</p>
                    <div class="table-responsive">
                       <table class="table">
                          <thead>
                             <tr>
                                <th scope="col">#</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                             </tr>
                          </thead>
                          <tbody>
                             <tr>
                                <th scope="row">1</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                             </tr>
                             <tr>
                                <th scope="row">2</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                             </tr>
                             <tr>
                                <th scope="row">3</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
</x-layouts.dashboard>