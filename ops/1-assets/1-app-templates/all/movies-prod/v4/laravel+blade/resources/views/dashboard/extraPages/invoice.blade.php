<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
           <div class="col-sm-12">
              <div class="iq-card">
                 <div class="iq-card-body">
                    <div class="row">
                       <div class="col-lg-6">
                          <img src="{{ asset('dashboard/images/logo.png') }}" class="img-fluid" alt="">
                       </div>
                       <div class="col-lg-6 align-self-center">
                          <h4 class="mb-0 float-right">Invoice</h4>
                       </div>
                       <div class="col-sm-12">
                          <hr class="mt-3">
                          <h5 class="mb-0">Hello, Barry Techs</h5>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                       </div>
                    </div>
                    <div class="row">
                       <div class="col-lg-12">
                          <div class="table-responsive-sm">
                             <table class="table">
                                <thead>
                                   <tr>
                                      <th scope="col">Order Date</th>
                                      <th scope="col">Order Status</th>
                                      <th scope="col">Order ID</th>
                                      <th scope="col">Billing Address</th>
                                      <th scope="col">Shipping Address</th>
                                   </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                      <td>Jan 17, 2016</td>
                                      <td><span class="badge badge-danger">Unpaid</span></td>
                                      <td>250028</td>
                                      <td>
                                         <p class="mb-0">PO Box 16122 Collins Street West<br>Victoria 8007 Australia<br>
                                            Phone: +123 456 7890<br>
                                            Email: demo@Streamit .com<br>
                                            Web: www.Streamit .com
                                         </p>
                                      </td>
                                      <td>
                                         <p class="mb-0">PO Box 16122 Collins Street West<br>Victoria 8007 Australia<br>
                                            Phone: +123 456 7890<br>
                                            Email: demo@Streamit .com<br>
                                            Web: www.Streamit .com
                                         </p>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                       </div>
                    </div>
                    <div class="row">
                       <div class="col-sm-12">
                          <h5>Order Summary</h5>
                          <div class="table-responsive-sm">
                             <table class="table table-striped">
                                <thead>
                                   <tr>
                                      <th class="text-center" scope="col">#</th>
                                      <th scope="col">Item</th>
                                      <th class="text-center" scope="col">Quantity</th>
                                      <th class="text-center" scope="col">Price</th>
                                      <th class="text-center" scope="col">Totals</th>
                                   </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                      <th class="text-center" scope="row">1</th>
                                      <td>
                                         <h6 class="mb-0">Web Design</h6>
                                         <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                      </td>
                                      <td class="text-center">5</td>
                                      <td class="text-center">$120.00</td>
                                      <td class="text-center"><b>$2,880.00</b></td>
                                   </tr>
                                   <tr>
                                      <th class="text-center" scope="row">2</th>
                                      <td>
                                         <h6 class="mb-0">Web Design</h6>
                                         <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                      </td>
                                      <td class="text-center">5</td>
                                      <td class="text-center">$120.00</td>
                                      <td class="text-center"><b>$2,880.00</b></td>
                                   </tr>
                                   <tr>
                                      <th class="text-center" scope="row">3</th>
                                      <td>
                                         <h6 class="mb-0">Web Design</h6>
                                         <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                      </td>
                                      <td class="text-center">5</td>
                                      <td class="text-center">$120.00</td>
                                      <td class="text-center"><b>$2,880.00</b></td>
                                   </tr>
                                   <tr>
                                      <th class="text-center" scope="row">4</th>
                                      <td>
                                         <h6 class="mb-0">Web Design</h6>
                                         <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                      </td>
                                      <td class="text-center">5</td>
                                      <td class="text-center">$120.00</td>
                                      <td class="text-center"><b>$2,880.00</b></td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                          <h5 class="mt-5">Order Details</h5>
                          <div class="table-responsive-sm">
                             <table class="table table-striped">
                                <thead>
                                   <tr>
                                      <th scope="col">Bank</th>
                                      <th scope="col">.Acc.No</th>
                                      <th scope="col">Due Date</th>
                                      <th scope="col">Sub-total</th>
                                      <th scope="col">Discount</th>
                                      <th scope="col">Total</th>
                                   </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                      <th scope="row">Threadneedle St</th>
                                      <td>12333456789</td>
                                      <td>12 November 2019</td>
                                      <td>$4597.50</td>
                                      <td>10%</td>
                                      <td><b>$4137.75 USD</b></td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                       </div>
                       <div class="col-sm-6"></div>
                       <div class="col-sm-6 text-right">
                          <button type="button" class="btn text-primary btn-link mr-3"><i class="ri-printer-line"></i> Download Print</button>
                          <button type="button" class="btn btn-primary">Submit</button>
                       </div>
                       <div class="col-sm-12 mt-5">
                          <b class="text-danger">Notes:</b>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
</x-layouts.dashboard>