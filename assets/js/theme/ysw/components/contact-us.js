export default function YSWContactUSForm() {
    const form = document.getElementById('ysw-js-form-contact');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formKey = form.formKey.value;
        const name = form.name.value;
        const email = form.email.value;
        const numberPhone = form.numberPhone.value;
        const project = form.project.value;
        const message = form.message.value;

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formKey,
                name,
                email,
                numberPhone,
                project,
                message,
            }),
        };

        try {
            const xhr = new XMLHttpRequest();

            // eslint-disable-next-line func-names
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    const container = document.querySelector('.ysw-c-contact-us .container');

                    container.innerHTML = `
                        <h2 class="ysw-c-contact-us__title">
                            Thanks for reaching out!
                        </h2>
                        <p class="ysw-c-contact-us__text">
                            We'll be in touch soon.
                        </p>
                    `;
                }
                if (this.readyState === 400 && this.status === 404 && this.status === 403) {
                    const container = document.querySelector('.ysw-c-contact-us .container');

                    container.innerHTML = `
                    <h2 class="ysw-c-contact-us__title">
                        Sorry! We have encountered an error
                    </h2>
                    <p class="ysw-c-contact-us__text">
                        Please refresh the page and try again. If the error persists please reach out to us via the <a href='/contact-us'>contact us form</a>
                    </p>
                    `;
                }
            };

            xhr.open('POST', 'https://hooks.zapier.com/hooks/catch/3632704/bwll8fe/');
            xhr.send(JSON.stringify({
                options,
            }));
        } catch (_e) {
            console.error(_e);
        }
    });
}
