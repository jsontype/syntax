<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="{{  asset('dashboard/js/jquery.min.js')}}"></script>
<script src="{{  asset('dashboard/js/flatpickr.min.js')}}"></script>
<script src="{{  asset('dashboard/js/popper.min.js')}}"></script>
<script src="{{  asset('dashboard/js/bootstrap.min.js')}}"></script>

<script src="{{  asset('dashboard/js/slick.min.js')}}"></script>
<script src="{{  asset('dashboard/js/owl.carousel.min.js')}}"></script>

<script src="{{  asset('dashboard/js/jquery.magnific-popup.min.js')}}"></script>

<script src="{{  asset('dashboard/js/custom.js')}}"></script>

<script src="{{  asset('dashboard/js/jquery.dataTables.min.js')}}"></script>
<script src="{{  asset('dashboard/js/dataTables.bootstrap4.min.js')}}"></script>

@if(in_array('data-table',$assets ?? []))
<script type="text/javascript" src="{{ asset('vendor/datatables/dataTables.buttons.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('vendor/datatables/pdfmake.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('vendor/datatables/vfs_fonts.js') }}"></script>
<script type="text/javascript" src="{{ asset('vendor/datatables/buttons.html5.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('vendor/datatables/buttons.print.min.js')}}"></script>
<script src="{{ asset('vendor/datatables/buttons.server-side.js')}}"></script>
@endif

<!-- Appear JavaScript -->
<script src="{{  asset('dashboard/js/jquery.appear.js')}}"></script>
<!-- Countdown JavaScript -->
<script src="{{  asset('dashboard/js/countdown.min.js')}}"></script>

<!--Select2 JavaScript -->


<script src="{{  asset('dashboard/js/select2.min.js')}}"></script>
<!-- Counterup JavaScript -->
<script src="{{  asset('dashboard/js/waypoints.min.js')}}"></script>
<script src="{{  asset('dashboard/js/jquery.counterup.min.js')}}"></script>
<!-- Wow JavaScript -->
<script src="{{  asset('dashboard/js/wow.min.js')}}"></script>
<!-- Slick JavaScript -->

<!-- Owl Carousel JavaScript -->

<!-- Magnific Popup JavaScript -->

<!-- Smooth Scrollbar JavaScript -->
<script src="{{  asset('dashboard/js/smooth-scrollbar.js')}}"></script>

<!-- Sweet-alert Script -->
<script src="{{asset('dashboard/js/sweet-alert.js')}}"></script>
<script src="{{asset('dashboard/vendor/sweetalert2/dist/sweetalert2.min.js')}}"></script> 

@stack('scripts')
<!--Apex JavaScript -->
<script src="{{  asset('dashboard/js/apexcharts.js')}}"></script>
<!-- Chart Custom JavaScript -->
<script src="{{  asset('dashboard/js/chart-custom.js')}}"></script>

@if($modalJs ?? false)
<!-- Ajax Modal JavaScript -->
<script src="{{asset('dashboard/laravel-js/modal-view.js') }}"></script>
@endif


<!-- Custom JavaScript -->
<!--rtl js-->
<script src="{{  asset('dashboard/js/rtl.js')}}"></script>
