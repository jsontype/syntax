/*
* Version: 1.1.0
* Template: Hope-Ui - Responsive Bootstrap 5 Admin Dashboard Template
* Author: iqonic.design
* Design and Developed by: iqonic.design
* NOTE: This file contains the script for initialize & listener Template.
*/

/**
 * option html attributes
 * @attribute title: data-iq-modal-title
 * @attribute size: data-iq-modal-size
 * @attribute fullscreen: data-iq-modal-fullscreen
 * @attribute url: data-iq-modal-url
 * @attribute render: data-iq-modal-render
 * @attribute renderTarget: data-iq-modal-render-target
 *
 * Options
 * @param {string} title: Modal Title
 * @param {string} size: sm, md, lg, xl, xxl
 * @param {string} fullscreen: true, sm-down, md-down, lg-down, xl-down, xxl-down
 * @param {string} url: url to be rendered
 * @param {string} render_target: target to be rendered
 * @param {string} render: ajax, html
 * @param {string} __this
 *
 * @returns {object}
 * */
 $(document).on('click', '[data-iq-modal="open"]', function (e) {
    e.preventDefault();
    resetModals();
    openModal({
        title: $(this).data('iq-modal-title'),
        size: $(this).data('iq-modal-size'),
        url: $(this).data('iq-modal-url'),
        __this: $(this)
    });

});

/**
 * Reset Modals
 **/
function resetModals() {
    $('[data-iq-modal="renderer"] input ,[data-iq-modal="renderer"] select,[data-iq-modal="renderer"] textarea').prop("disabled", false);
    $('[data-iq-modal="renderer"] input ,[data-iq-modal="renderer"] select,[data-iq-modal="renderer"] textarea').val("");
    $('[data-iq-modal="renderer"] .modal-body').empty();
}

/**
 *
 * @param {options} options contains all the data required to open the modal
 */
function openModal(options, __this){
    const app_title = options.title;
    const app_size = options.size;
    const fullscreen = options.fullscreen;
    const url = options.url;
    const target = options.render_target;
    const render = options.render || 'ajax';
    const _this = __this;

    // Modal Size Change Functionality

    // remove old classes
    $('[data-iq-modal="renderer"] modal-dialog').removeClass('modal-sm');
    $('[data-iq-modal="renderer"] modal-dialog').removeClass('modal-lg');
    $('[data-iq-modal="renderer"] modal-dialog').removeClass('modal-xl');
    $('[data-iq-modal="renderer"] modal-dialog').removeClass('modal-xxl');

    // add new classes
    switch (app_size) {
        case 'sm':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-sm')
            break;

        case 'md':
            break;

        case 'lg':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-lg')
            break;

        case 'xl':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-xl')
            break;

        case 'xxl':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-xxl')
            break;

        default:
            break;
    }

    // Modal Fullscreen Change Functionality
    switch (fullscreen) {
        case 'true':
        case true:
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-fullscreen')
            break;

        case 'sm-down':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-fullscreen-sm-down')
            break;

        case 'md-down':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-fullscreen-md-down')
            break;

        case 'lg-down':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-fullscreen-lg-down')
            break;

        case 'xl-down':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-fullscreen-xl-down')
            break;

        case 'xxl-down':
            $('[data-iq-modal="renderer"] .modal-dialog').addClass('modal-fullscreen-xxl-down')
            break;

        default:
            break;
    }

    // Modal Render Functionality
    switch (render) {
        case 'ajax':
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    if($(target).length){
                        $(target).html(data.data);
                    } else {
                        $('[data-iq-modal="renderer"] [data-iq-modal="body"]').html(data.data);
                        $('[data-iq-modal="renderer"] [data-iq-modal="title"]').empty().append(app_title);
                        $('[data-iq-modal="renderer"]').modal('show');
                    }
                }
            });
        break;
    }
}
