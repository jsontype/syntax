(function(){
  "use strict";
  //single
  $(".select2-basic-single").select2({
    width: '100%'
  });

  $('.select2-container').addClass('wide');

  // tags
  $(".select2-basic-single-tag").select2({
      tags: true
  });

  //multiple
  $(".select2-basic-multiple").select2();

  //disable
  var $disabledResults = $(".select2-disabled ");
  $disabledResults.select2();

  //placeholder
  $('.select2-placeholder').select2({
    placeholder: "Select a State",
    allowClear: true
  });
  //maximum input number

  $(".select2-multiple-limit").select2({
    maximumSelectionLength: 3
  });

  //theme
  $(".select2-theme-single").select2({
    theme: "classic"
  });


  $(".select2-option-creation").select2({
    tags: true
  });

  $(".select2-automatic-tokenizer").select2({
    tags: true,
    tokenSeparators: [',', ' ']
  })
})();
