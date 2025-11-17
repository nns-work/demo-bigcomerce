import $ from 'jquery';
import 'slick-carousel';

export default function () {
  const $slider = $('.article-slider__slider');

  if ($slider.length == 0) {
    return;
  }

  $slider.each(function() {
    const $slider = $(this);
    const $sliderBlocks = $slider.find('.article-slider__block');

    const settings = {
      mobileFirst: true,
      arrows: false,
      infinite: false,
      slidesToShow: 1.2,
      responsive: [
          {
            breakpoint: 479,
            settings: {
              arrows: true,
              infinite: true,
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 579,
            settings: {
              arrows: true,
              slidesToShow: 1.999999999999,
            }
          },
          {
            breakpoint: 1023,
            settings: {
              arrows: true,
              slidesToShow: 2.999999999999,
            }
          },
        ]
    };

    $slider.slick(settings);

    $(window).on('resize', function() {
      // reinit slick on resize if previously destroyed
      if (!$slider.hasClass('slick-initialized')) {
        return $slider.slick(settings);
      }
    });
  });
}