<div class="rtl-box">
   <button type="button" class="btn btn-light rtl-btn">
         <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="white">
         <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
         </svg>
   </button>
   <div class="rtl-panel">
      <ul class="modes">
         <li class="dir-btn" data-mode="rtl" data-active="false"   data-value="ltr"><a href="#">LTR</a></li>
         <li class="dir-btn" data-mode="rtl" data-active="true"   data-value="rtl"><a href="#">RTL</a></li>
      </ul>
   </div>
</div>


<footer class="iq-footer">
    <div class="container-fluid">
       <div class="row">
          <div class="col-lg-6">
             <ul class="list-inline mb-0">
                <li class="list-inline-item"><a href="{{ route('dashboard.privacyPolicy') }}">Privacy Policy</a></li>
                <li class="list-inline-item"><a href="{{ route('dashboard.termsOfService') }}">Terms of Use</a></li>
             </ul>
          </div>
          <div class="col-lg-6 text-right">
             Copyright {{ date('Y') }} <a href="#">{{ env('APP_NAME') }}</a> All Rights Reserved.
          </div>
       </div>
    </div>
 </footer>
