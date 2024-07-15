<x-layouts.frontend>
    <body>
        <div class="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" style="background-image:url({{url('frontend/images/about-us/01.jpg')}});">  
            <div class="container-fluid"> 
                <div class="row align-items-center">
                    <div class="col-sm-12">
                        <nav aria-label="breadcrumb" class="text-center iq-breadcrumb-two">
                            <h2 class="title">Pricing Plan 1</h2>
                            <ol class="breadcrumb main-bg">
                                <li class="breadcrumb-item"><a href="{{route('frontend.home')}}">Home</a></li> 
                                <li class="breadcrumb-item active">Pricing Plan 1</li>
                            </ol>
                        </nav>
                    </div>
                </div> 
            </div>
        </div>

        <!-- Main container -->  
        <main id="main" class="site-main">
        <div class="container">
           <div class="row">
            <div class="col-lg-12 col-sm-12">

                <div class="iq-pricing-card">
                    <div class="table-responsive iq-pricing pt-2">
                        <table id="my-table" class="table" data-active="premium">
                           <thead>
                                <tr>
                                    <th class="text-center iq-price-head">
                                    </th>
                                    <th class="text-center iq-price-head free">
                                       <div class="iq-price-box">
                                          <h3 class="iq-price-rate text-white">$0<small> / Month</small></h3>
                                          <span class="type">Free</span>
                                       </div>
                                    </th>
                                    <th class="text-center iq-price-head premium">
                                       <div class="iq-price-box active">
                                          <h3 class="iq-price-rate text-white" >$39<small> / 3 Months</small></h3>
                                          <span class="type">Premium</span>
                                       </div>
                                    </th>
                                    <th class="text-center iq-price-head basic">
                                       <div class="iq-price-box">
                                          <h3 class="iq-price-rate text-white" >$19<small> / Month</small></h3>
                                          <span class="type">Basic</span>
                                       </div>
                                    </th>
                                 </tr>
                           </thead>
                           <tbody>                
                              <tr>
                                 <th class="text-center" scope="row"> Ad Free Entertainment</th>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-times-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell active">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-times-circle"></i>
                                 </td>
                              </tr>
                              <tr>
                                 <th class="text-center" scope="row"> American Tv Shows</th>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-times-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell active">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                              </tr>
                              <tr>
                                 <th class="text-center" scope="row"> Hollywood Movies</th>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-times-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell active">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                              </tr>
                              <tr>
                                 <th class="text-center" scope="row"> New Movies</th>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-times-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell active">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                              </tr>
                              <tr>
                                 <th class="text-center" scope="row"> Streamit Special</th>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-times-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell active">
                                    <i class="fa fa-check-circle"></i>
                                 </td>
                                 <td class="text-center iq-child-cell">
                                    <i class="fa fa-times-circle"></i>
                                 </td>
                              </tr>
                              <tr>
                                 <th class="text-center" scope="row"> Video Quality</th>
                                 <td class="text-center iq-child-cell">
                                    SD(480p)
                                 </td>
                                 <td class="text-center iq-child-cell active">
                                    FHD(1080p)
                                 </td>
                                 <td class="text-center iq-child-cell">
                                    HD(720p)
                                 </td>
                              </tr>
                              <tr>
                                 <th class="text-center iq-price-footer"></th>
                                 <td class="text-center iq-price-footer">
                                    <div class="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                       <a href="{{route('register')}}" class="btn btn-hover iq-button">Subscribe</a>
                                    </div>
                                 </td>
                                 <td class="text-center iq-price-footer active">
                                    <div class="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                       <a href="{{route('register')}}" class="btn btn-hover iq-button">Subscribe</a>
                                    </div>
                                 </td>
                                 <td class="text-center iq-price-footer">
                                    <div class="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                       <a href="{{route('register')}}" class="btn btn-hover iq-button">Subscribe</a>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                    </div>
                  </div>
               </div>
            </div>   
         </div>
      </main>

      <div id="back-to-top">
        <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
     </div>
    </body>
</x-layouts.frontend>