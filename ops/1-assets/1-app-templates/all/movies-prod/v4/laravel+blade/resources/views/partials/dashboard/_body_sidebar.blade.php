<div class="iq-sidebar">
    <div class="iq-sidebar-logo d-flex justify-content-between">
       <a href="{{ route('dashboard.home') }}" class="header-logo">
          <img src="{{  asset ('dashboard/images/logo.png')  }}" class="img-fluid rounded-normal" alt="">
          <div class="logo-title">
             <span class="text-primary text-uppercase">Streamit</span>
          </div>
       </a>
       <div class="iq-menu-bt-sidebar">
          <div class="iq-menu-bt align-self-center">
             <div class="wrapper-menu">
                <div class="main-circle"><i class="las la-bars"></i></div>
             </div>
          </div>
       </div>
    </div>
    <div id="sidebar-scrollbar">
       <nav class="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" class="iq-menu">
             <li><a href="{{ route('frontend.home') }}" class="text-primary"><i class="ri-arrow-right-line"></i><span>Visit site</span></a></li>
             <li class="{{activeRouteName('dashboard.home')}}"><a href="{{ route('dashboard.home') }}" class="iq-waves-effect"><i class="las la-home iq-arrow-left"></i><span>Dashboard</span></a></li>
             @can('rating')
             <li class="{{activeRouteName('dashboard.rating')}}"><a href="{{ route('dashboard.rating') }}" class="iq-waves-effect"><i class="las la-star-half-alt"></i><span>Rating </span></a></li>
             @endcan
             @can('comment')
             <li class="{{activeRouteName('dashboard.comment')}}"><a href="{{ route('dashboard.comment') }}" class="iq-waves-effect"><i class="las la-comments"></i><span>Comment</span></a></li>
             @endcan
             @can('user')
             <li class="{{activeRouteName('users.index')}}"><a href="{{ route('users.index') }}" class="iq-waves-effect"><i class="las la-user-friends"></i><span>User</span></a></li>
             @endcan
             @can('category')
             <li>
                <a href="#category" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="las la-list-ul"></i><span>Category</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="category" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                   <li class="{{activeRouteName('dashboard.addCategory')}}"><a href="{{ route('dashboard.addCategory') }}"><i class="las la-user-plus"></i>Add Category</a></li>
                   <li class="{{activeRouteName('dashboard.categoryList')}}"><a href="{{ route('dashboard.categoryList') }}"><i class="las la-eye"></i>Category List</a></li>
                </ul>
             </li>
             @endcan
             @can('movie')
             <li>
                <a href="#movie" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="las la-film"></i><span>Movie</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="movie" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                   <li class="{{activeRouteName('dashboard.addMovie')}}"><a href="{{ route('dashboard.addMovie') }}"><i class="las la-user-plus"></i>Add Movie</a></li>
                   <li class="{{activeRouteName('dashboard.movieList')}}"><a href="{{ route('dashboard.movieList') }}"><i class="las la-eye"></i>Movie List</a></li>
                </ul>
             </li>
             @endcan
             @can('show')
             <li>
                <a href="#show" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i
                   class="las la-film"></i><span>Show</span><i
                   class="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul id="show" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                   <li class="{{activeRouteName('dashboard.addShow')}}"><a href="{{ route('dashboard.addShow') }}"><i class="las la-user-plus"></i>Add Show</a></li>
                   <li class="{{activeRouteName('dashboard.showList')}}"><a href="{{ route('dashboard.showList') }}"><i class="las la-eye"></i>Show List</a></li>
                </ul>
             </li>
             @endcan
             @can('pricing')
             <li class="{{activeRouteName('dashboard.pricing')}}"><a href="{{ route('dashboard.pricing') }}" class="iq-waves-effect"><i class="ri-price-tag-line"></i><span>Pricing</span></a></li>
             @endcan
             @can('permission-role')
             <li class="{{activeRouteName('permission-role.list')}}"><a href="{{ route('permission-role.list') }}" class="iq-waves-effect"><i class="ri-lock-line"></i><span>Perrmission</span></a></li>
             @endcan
             @can('ui-elements')
             <li class="">
                <a href="#ui-elements" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="lab la-elementor iq-arrow-left"></i><span>UI Elements</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="ui-elements" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                   <li class="{{activeRoute('dashboards/ui/*')}} elements">
                      <a href="#sub-menu" class="iq-waves-effect active collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-play-circle-line"></i><span>UI Kit</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="sub-menu" class="iq-submenu collapse" data-parent="#ui-elements">
                         <li class="{{activeRouteName('ui.colors')}}"><a href="{{ route('ui.colors') }}"><i class="las la-palette"></i>colors</a></li>
                         <li class="{{activeRouteName('ui.typography')}}"><a href="{{ route('ui.typography') }}"><i class="las la-keyboard"></i>Typography</a></li>
                         <li class="{{activeRouteName('ui.alerts')}}"><a href="{{ route('ui.alerts') }}"><i class="las la-tag"></i>Alerts</a></li>
                         <li class="{{activeRouteName('ui.badges')}}"><a href="{{ route('ui.badges') }}"><i class="lab la-atlassian"></i>Badges</a></li>
                         <li class="{{activeRouteName('ui.breadcrumb')}}"><a href="{{ route('ui.breadcrumb') }}"><i class="las la-bars"></i>Breadcrumb</a></li>
                         <li class="{{activeRouteName('ui.buttons')}}"><a href="{{ route('ui.buttons') }}"><i class="las la-tablet"></i>Buttons</a></li>
                         <li class="{{activeRouteName('ui.cards')}}"><a href="{{ route('ui.cards') }}"><i class="las la-credit-card"></i>Cards</a></li>
                         <li class="{{activeRouteName('ui.carousel')}}"><a href="{{ route('ui.carousel') }}"><i class="las la-film"></i>Carousel</a></li>
                         <li class="{{activeRouteName('ui.video')}}"><a href="{{ route('ui.video') }}"><i class="las la-video"></i>Video</a></li>
                         <li class="{{activeRouteName('ui.grid')}}"><a href="{{ route('ui.grid') }}"><i class="las la-border-all"></i>Grid</a></li>
                         <li class="{{activeRouteName('ui.images')}}"><a href="{{ route('ui.images') }}"><i class="las la-images"></i>Images</a></li>
                         <li class="{{activeRouteName('ui.listgroup')}}"><a href="{{ route('ui.listgroup') }}"><i class="las la-list"></i>list Group</a></li>
                         <li class="{{activeRouteName('ui.media')}}"><a href="{{ route('ui.media') }}"><i class="las la-ad"></i>Media</a></li>
                         <li class="{{activeRouteName('ui.modal')}}"><a href="{{ route('ui.modal') }}"><i class="las la-columns"></i>Modal</a></li>
                         <li class="{{activeRouteName('ui.notification')}}"><a href="{{ route('ui.notification') }}"><i class="las la-bell"></i>Notifications</a></li>
                         <li class="{{activeRouteName('ui.pagination')}}"><a href="{{ route('ui.pagination') }}"><i class="las la-ellipsis-h"></i>Pagination</a></li>
                         <li class="{{activeRouteName('ui.popovers')}}"><a href="{{ route('ui.popovers') }}"><i class="las la-eraser"></i>Popovers</a></li>
                         <li class="{{activeRouteName('ui.progressbars')}}"><a href="{{ route('ui.progressbars') }}"><i class="las la-hdd"></i>Progressbars</a></li>
                         <li class="{{activeRouteName('ui.tabs')}}"><a href="{{ route('ui.tabs') }}"><i class="las la-database"></i>Tabs</a></li>
                         <li class="{{activeRouteName('ui.colors')}}"><a href="{{ route('ui.tooltips') }}"><i class="las la-magnet"></i>Tooltips</a></li>
                      </ul>
                   </li>
                  
                   <li class="form">
                      <a href="#forms" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="lab la-wpforms"></i><span>Forms</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="forms" class="iq-submenu collapse" data-parent="#ui-elements">
                         <li class="{{activeRouteName('forms.elements')}}"><a href="{{ route('forms.elements') }}"><i class="las la-book"></i>Form Elements</a></li>
                         <li class="{{activeRouteName('forms.validation')}}"><a href="{{ route('forms.validation') }}"><i class="las la-edit"></i>Form Validation</a></li>
                         <li class="{{activeRouteName('forms.switch')}}"><a href="{{ route('forms.switch') }}"><i class="las la-toggle-off"></i>Form Switch</a></li>
                         <li class="{{activeRouteName('forms.checkbox')}}"><a href="{{ route('forms.checkbox') }}"><i class="las la-check-square"></i>Form Checkbox</a></li>
                         <li class="{{activeRouteName('forms.radio')}}"><a href="{{ route('forms.radio') }}"><i class="ri-radio-button-line"></i>Form Radio</a></li>
                      </ul>
                   </li>
                   <li>
                      <a href="#wizard-form" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-archive-drawer-line"></i><span>Forms Wizard</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="wizard-form" class="iq-submenu collapse" data-parent="#ui-elements">
                         <li class="{{activeRouteName('formsWizard.simpleWizard')}}"><a href="{{ route('formsWizard.simpleWizard') }}"><i class="ri-clockwise-line"></i>Simple Wizard</a></li>
                         <li class="{{activeRouteName('formsWizard.validateWizard')}}"><a href="{{ route('formsWizard.validateWizard') }}"><i class="ri-clockwise-2-line"></i>Validate Wizard</a></li>
                         <li class="{{activeRouteName('formsWizard.verticalWizard')}}"><a href="{{ route('formsWizard.verticalWizard') }}"><i class="ri-anticlockwise-line"></i>Vertical Wizard</a></li>
                      </ul>
                   </li>
                   <li>
                      <a href="#tables" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-table-line"></i><span>Table</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="tables" class="iq-submenu collapse" data-parent="#ui-elements">
                         <li class="{{activeRouteName('table.basicTable')}}"><a href="{{ route('table.basicTable') }}"><i class="ri-table-line"></i>Basic Tables</a></li>
                         <li class="{{activeRouteName('table.dataTable')}}"><a href="{{ route('table.dataTable') }}"><i class="ri-database-line"></i>Data Table</a></li>
                         <li class="{{activeRouteName('table.editTable')}}"><a href="{{ route('table.editTable') }}"><i class="ri-refund-line"></i>Editable Table</a></li>
                      </ul>
                   </li>
                   <li>
                      <a href="#icons" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-list-check"></i><span>Icons</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="icons" class="iq-submenu collapse" data-parent="#ui-elements">
                         <li class="{{activeRouteName('icons.dripicons')}}"><a href="{{ route('icons.dripicons') }}"><i class="ri-stack-line"></i>Dripicons</a></li>
                         <li class="{{activeRouteName('icons.fontAwesome')}}"><a href="{{ route('icons.fontAwesome') }}"><i class="ri-facebook-fill"></i>Font Awesome 5</a></li>
                         <li class="{{activeRouteName('icons.lineAwesome')}}"><a href="{{ route('icons.lineAwesome') }}"><i class="ri-keynote-line"></i>line Awesome</a></li>
                         <li class="{{activeRouteName('icons.remixicon')}}"><a href="{{ route('icons.remixicon') }}"><i class="ri-remixicon-line"></i>Remixicon</a></li>
                         <li class="{{activeRouteName('icons.unicons')}}"><a href="{{ route('icons.unicons') }}"><i class="ri-underline"></i>unicons</a></li>
                      </ul>
                   </li>
                </ul>
             </li>
             @endcan
            @can('pages')
             <li>
                <a href="#pages" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="las la-file-alt iq-arrow-left"></i><span>Pages</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="pages" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                   <li>
                      <a href="#authentication" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-pages-line"></i><span>Authentication</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="authentication" class="iq-submenu collapse" data-parent="#pages">
                         <li class="{{activeRouteName('login')}}"><a href="{{route('login')}}"><i class="las la-sign-in-alt"></i>Login</a></li>
                         <li class="{{activeRouteName('register')}}"><a href="{{route('register')}}"><i class="ri-login-circle-line"></i>Register</a></li>
                         <li class="{{activeRouteName('frontend.forgotpassword')}}"><a href="{{route('frontend.forgotpassword')}}"><i class="ri-record-mail-line"></i>Recover Password</a></li>
                         <li class="{{activeRouteName('dashboard.pageConfirmMail')}}"><a href="{{route('dashboard.pageConfirmMail')}}"><i class="ri-file-code-line"></i>Confirm Mail</a></li>
                         </ul>
                   </li>
                   <li>
                      <a href="#extra-pages" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-pantone-line"></i><span>Extra Pages</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                      <ul id="extra-pages" class="iq-submenu collapse" data-parent="#pages">
                         <li class="{{activeRouteName('extraPage.timeline')}}"><a href="{{route('extraPage.timeline') }}"><i class="ri-map-pin-time-line"></i>Timeline</a></li>
                         <li class="{{activeRouteName('extraPage.invoice')}}"><a href="{{route('extraPage.invoice') }}"><i class="ri-question-answer-line"></i>Invoice</a></li>
                         <li class="{{activeRouteName('extraPage.blankPage')}}"><a href="{{route('extraPage.blankPage')}}"><i class="ri-invision-line"></i>Blank Page</a></li>
                         <li class="{{activeRouteName('extraPage.error404')}}"><a href="{{route('extraPage.error404')}}"><i class="ri-error-warning-line"></i>Error 404</a></li>
                         <li class="{{activeRouteName('extraPage.error500')}}"><a href="{{route('extraPage.error500')}}"><i class="ri-error-warning-line"></i>Error 500</a></li>
                         <li class="{{activeRouteName('extraPage.maintenance')}}"><a href="{{route('extraPage.maintenance')}}"><i class="ri-archive-line"></i>Maintenance</a></li>
                         <li class="{{activeRouteName('extraPage.commingSoon')}}"><a href="{{route('extraPage.commingSoon')}}"><i class="ri-mastercard-line"></i>Coming Soon</a></li>
                         <li class="{{activeRouteName('extraPage.faq')}}"><a href="{{route('extraPage.faq')}}"><i class="ri-compasses-line"></i>Faq</a></li>
                      </ul>
                   </li>
                </ul>
             </li>
             @endcan
          </ul>
       </nav>
    </div>
 </div>