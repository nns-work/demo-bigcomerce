import 'slick-carousel';

class YSWProductGalleryController {
    constructor(context) {
        this.context = context;
        this.carousel = document.querySelector('.productView-thumbnails');
        this.mobileThumbnails = document.querySelectorAll('.productView-thumbnail.mobile');
        this.desktopThumbnails = document.querySelectorAll('.productView-thumbnail.desktop');
        this.arrowWrap = document.querySelector('.slideBtnWrap');
        this.firstSlide = document.querySelector('.productView-thumbnail-link');
        this.flagMobile = false;
        this.flagDesktop = false;
        this.init();
    }

    init() {
        this.setFlag();
        this.setCarousel();
        this.setArrow();
        this.setObserve();
        this.setClickEvent();
    }

    setCarousel() {
        this.setFirstSlide();
        this.hideCarousel();

        if (window.innerWidth < 1001) {
            if (this.mobileThumbnails.length > 1) {
                this.arrowWrap.removeAttribute('hidden');
            }

            if (!this.flagMobile) return;

            $(this.carousel).slick({
                infinite: false,
                mobileFirst: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                infinity: true,
            }).slick('slickFilter', '.mobile').slick('refresh').slick('slickGoTo', 0);
        } else {
            if (this.desktopThumbnails.length > 1) {
                this.arrowWrap.removeAttribute('hidden');
            }

            if (!this.flagDesktop) return;

            $(this.carousel).slick({
                infinite: false,
                mobileFirst: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                infinity: true,
            }).slick('slickFilter', '.desktop').slick('refresh').slick('slickGoTo', 0);
        }

        this.showCarousel();
    }

    setClickEvent() {
        const thumbnails = document.querySelectorAll('.productView-thumbnail-link');

        thumbnails.forEach((link, index) => {
            link.addEventListener('click', () => {
                if (index === 0) {
                    document.querySelector('.slidePrevBtn').style.display = 'none';
                } else {
                    document.querySelector('.slidePrevBtn').style.display = 'block';
                }

                if (index === document.querySelectorAll('.productView-thumbnail-link').length - 1) {
                    document.querySelector('.slideNextBtn').style.display = 'none';
                } else {
                    document.querySelector('.slideNextBtn').style.display = 'block';
                }

                $(this.carousel).slick('slickGoTo', index);
            });
        });
    }

    setFirstSlide() {
        this.firstSlide.classList.add('is-active');
        this.firstSlide.click();
    }

    setFlag() {
        this.flagMobile = true;
        this.flagDesktop = true;
    }

    setArrow() {
        const arrowPrev = document.querySelector('.slidePrevBtn');
        const arrowNext = document.querySelector('.slideNextBtn');

        arrowPrev.addEventListener('click', () => {
            this.goTo('previous');
        });

        arrowNext.addEventListener('click', () => {
            this.goTo('next');
        });
    }

    setObserve() {
        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                this.hideCarousel();


                if (document.querySelector('.slick-active[data-slick-index="0"]')) {
                    document.querySelector('.slidePrevBtn').style.display = 'none';
                }


                if (entry.contentRect.width < 1001) {
                    if (!this.flagMobile) return;

                    $(this.carousel).slick('slickUnfilter').slick('slickFilter', '.mobile').slick('refresh').slick('slickGoTo', 0);
                    this.setFirstSlide();
                } else {
                    if (!this.flagDesktop) return;

                    $(this.carousel).slick('slickUnfilter').slick('slickFilter', '.desktop').slick('refresh').slick('slickGoTo', 0);
                    this.setFirstSlide();
                }

                this.showCarousel();
            }
        });

        observer.observe(document.body);
    }

    goTo(direction) {
        const imageLinks = Array.from(document.querySelectorAll('.productView-thumbnail-link'));
        const activeIndex = imageLinks.findIndex(link => link.classList.contains('is-active'));

        let targetIndex;

        if (direction === 'next') {
            targetIndex = (activeIndex + 1) % imageLinks.length;
        } else if (direction === 'previous') {
            targetIndex = (activeIndex - 1 + imageLinks.length) % imageLinks.length;
        }

        if (targetIndex === 0) {
            document.querySelector('.slidePrevBtn').style.display = 'none';
        } else {
            document.querySelector('.slidePrevBtn').style.display = 'block';
        }

        if (targetIndex === imageLinks.length - 1) {
            document.querySelector('.slideNextBtn').style.display = 'none';
        } else {
            document.querySelector('.slideNextBtn').style.display = 'block';
        }


        if (targetIndex === imageLinks.length - 1) {
            $(this.carousel).slick('slickNext');
        } else {
            $(this.carousel).slick('slickGoTo', targetIndex);
        }

        imageLinks[targetIndex].click();
    }

    hideCarousel() {
        this.carousel.style.visibility = 'hidden';
        this.arrowWrap.setAttribute('hidden', '');
    }

    showCarousel() {
        this.carousel.style.visibility = 'visible';
        this.arrowWrap.removeAttribute('hidden');
    }
}

export default function YSWProductGalleryControllerFactory(context) {
    if (this instanceof YSWProductGalleryController) {
        this.context = context;
    } else {
        return new YSWProductGalleryController(context);
    }
}
