{/* <div class="rtl-box">
<button type="button" class="btn btn-light rtl-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="white">
      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
      </svg>
</button>
<div class="rtl-panel">
   <ul class="present">
      <li class="dir-btn" data-value="ltr"><a href="">LTR</a></li>
      <li class="dir-btn" data-value="rtl"><a href="">RTL</a></li>
   </ul>
</div>
</div> */}
// (function (jQuery) {
//     "use strict";
    
//     const storageRtl = sessionStorage.getItem('rtl')

//     if (storageRtl !== 'null') {
//         changeRtl(storageRtl);
//     }

//     if($('html').attr('dir') !== undefined && $('html').attr('dir') == 'rtl'){
//         changeRtl('true');
//     } else {
//         changeRtl('false');
//     }

//     const urlParams = new URLSearchParams(window.location.search);

//     const rtl = urlParams.get('rtl');
    
//     if (rtl !== null) {
//         if (rtl === 'true') {
//             changeRtl('true');
//         }
//     }
        
//     $(document).on("click",'[data-mode="rtl"]' ,function (e) {

//         const rtl = $(this).attr('data-active');
//         console.log(rtl)
//         changeRtl(rtl)
//     });
    
//     function changeRtl(rtl) {
//         if (rtl === 'true') {   
//             $('html').attr("dir", "rtl");
//             $('[data-mode="rtl"]').attr('data-active','false')
//             $('[data-mode="rtl"]').find('i').attr('class','ri-text-direction-l')
//             rtl = true;
//         } else {
//             $('html').attr("dir",'ltr');
//             $('[data-mode="rtl"]').attr('data-active','true')
//             $('[data-mode="rtl"]').find('i').attr('class','ri-text-direction-r')
//             rtl = false;
//         }

//         updateSessionStorage(rtl)
//         const event = new CustomEvent("ChangeRtl", {detail: {rtl: rtl} });
//         document.dispatchEvent(event);
//     }
    
//     function updateSessionStorage(rtl) {
//         sessionStorage.setItem('rtl', rtl);
//     }


// })(jQuery);
(function (jQuery) {
    "use strict";

    const storageRtl = sessionStorage.getItem('rtl')

    if (storageRtl !== 'null') {
        changeRtl(storageRtl);
    }

    if($('html').attr('dir') !== undefined && $('html').attr('dir') == 'rtl'){
        changeRtl('true');
    } else {
        changeRtl('false');
    }

    const urlParams = new URLSearchParams(window.location.search);

    const rtl = urlParams.get('rtl');

    if (rtl !== null) {
        if (rtl === 'true') {
            changeRtl('true');
        }
    }
        
    $(document).on("click",'[data-mode="rtl"]' ,function (e) {
        const rtl = $(this).attr('data-active');
        changeRtl(rtl)
    });

    $(document).on('click', '.rtl-btn', function () {
        $(this).closest('.rtl-box').toggleClass('show')
    })
    function changeRtl(rtl) {
        if (rtl === 'true'){
            $('html').attr("dir", "rtl");
            $('[data-value="ltr"]').removeClass('active')
            $('[data-value="rtl"]').addClass('active')
            rtl = true;
        } else {
            $('html').attr("dir",'ltr');
            $('[data-value="rtl"]').removeClass('active')
            $('[data-value="ltr"]').addClass('active')
            rtl = false;
        }

        updateSessionStorage(rtl)
        const event = new CustomEvent("ChangeRtl", {detail: {rtl: rtl} });
        document.dispatchEvent(event);
    }

    function updateSessionStorage(rtl) {
        sessionStorage.setItem('rtl', rtl);
    }
})(jQuery);

