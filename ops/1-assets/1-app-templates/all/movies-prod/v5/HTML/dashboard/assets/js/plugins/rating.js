$(function () {
    $('#square-rating').barrating('show', {
        theme: 'bars-square',
        showValues: true,
        showSelectedRating: false
    });
    $('#horizontal-rating').barrating('show', {
        theme: 'bars-horizontal',
        reverse: true,
        hoverState: false
    });
    $('#bars-number').barrating('show', {
        theme: 'bars-1to10'
    });
    $('#pill-rating').barrating('show', {
        theme: 'bars-pill',
        initialRating: 'A',
        showValues: true,
        showSelectedRating: false,
        allowEmpty: true,
        emptyValue: '-- no rating selected --',
        onSelect: function(value, text) {
            alert('Selected rating: ' + value);
        }
    });
    $('#movie-rating').barrating('show', {
        theme: 'bars-movie'
    });
    $('#example-reversed').barrating('show', {
        theme: 'bars-reversed',
        showSelectedRating: true,
        reverse: true
    });

});
