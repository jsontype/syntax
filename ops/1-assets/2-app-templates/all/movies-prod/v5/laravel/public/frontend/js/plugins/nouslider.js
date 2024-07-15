/*---------------noUiSlider-------------------*/
const rangeSlider = document.querySelectorAll('.range-slider');
Array.from(rangeSlider, (elem) => {
    if (typeof noUiSlider !== typeof undefined) {
        if (elem.getAttribute('id') !== '' && elem.getAttribute('id') !== null) {
            window[elem.getAttribute('id')] = createSlider(elem)
        } else {
            createSlider(elem)
        }
    }
})
function createSlider(elem) {
    return noUiSlider.create(elem, {
        start: [11, 50],
        connect: true,
        range: {
            'min': 0,
            '10%': [5, 5],
            'max': 50
        }
    })
}
/*------------------------
   range picker
   --------------------------*/

const valuesNode = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
];
window.addEventListener('load', function () {
    if (window['product-price-range']) {
        window['product-price-range'].on('update', function (values, handle, unencoded, isTap, positions) {
            valuesNode[handle].innerHTML = '$' + Number(values[handle]).toFixed(0);
        });
    }
})

