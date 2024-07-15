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

