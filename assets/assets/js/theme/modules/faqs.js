import $ from 'jquery';

export default function () {
  const $faqsElems = $('.faqs-module');
  if ( $faqsElems.length == 0 ) {
    return;
  } 

  $faqsElems.each(function() {
    const $faqElem = $(this);
    const $buttons = $faqElem.find('.faqs-module__item-button');

    $buttons.each(function() {
      const $button = $(this);
      $button.on('click', function() {
        // toggle aria-expanded on button
        $(this).attr('aria-expanded', function(index, attr) {
          return attr == 'true' ? false : true;
        });

        // get parent item and toggle is-expanded class
        const $faqItem = $(this).closest('.faqs-module__item');
        $faqItem.toggleClass('is-expanded');
      });
    });
  });
}
