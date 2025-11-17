export default () => {
    const $button = $('.footer-list__heading');

    $button.on('click', (e) => {
        e.preventDefault();
        $(e.currentTarget).closest('.footer-info-col').toggleClass('is-open');
    });
};
