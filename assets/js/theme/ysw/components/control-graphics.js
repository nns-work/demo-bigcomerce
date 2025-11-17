const addMultiEventListener = (element, eventNames, listener) => {
    eventNames.forEach((eventName) => {
        element.addEventListener(eventName, listener);
    });
};

const yswControlGraphics = () => {
    const controls = document.querySelectorAll('[data-ysw-control]');

    if (!controls) return;

    controls.forEach((control) => {
        control.checked = true;

        const targets = document.querySelectorAll(`[data-ysw-target="${control.dataset.yswControl}"]`);

        targets.forEach((target) => {
            target.style.visibility = 'visible';
        });

        control.addEventListener('click', () => {
            const _targets = document.querySelectorAll(`[data-ysw-target="${control.dataset.yswControl}"]`);
            _targets.forEach((target) => {
                // eslint-disable-next-line no-unused-expressions
                target.style.visibility === 'hidden' ? target.style.visibility = 'visible' : target.style.visibility = 'hidden';
            });
        });
    });

    const bullets = document.querySelectorAll('[data-ysw-hover]');

    if (!bullets) return;

    bullets.forEach((bullet) => {
        const showTargetsFunc = (e) => {
            const targets = document.querySelectorAll(`[data-${bullet.dataset.yswHover}]`);

            if (e.target.dataset.yswHover === bullet.dataset.yswHover || e.target.closest(`[data-${bullet.dataset.yswHover}]`)) {
                targets.forEach((target) => target.removeAttribute('hidden'));
            }
        };

        const hideTargetsFunc = (e) => {
            const targets = document.querySelectorAll(`[data-${bullet.dataset.yswHover}]`);

            if (e.target.dataset.yswHover !== bullet.dataset.yswHover || !e.target.closest(`[data-${bullet.dataset.yswHover}]`)) {
                targets.forEach((target) => target.setAttribute('hidden', ''));
            }
        };

        addMultiEventListener(document.body, ['mouseover', 'touchstart'], showTargetsFunc);
        addMultiEventListener(document.body, ['mouseout', 'touchend'], hideTargetsFunc);
    });
};

export default yswControlGraphics;
