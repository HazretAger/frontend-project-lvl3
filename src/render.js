import i18next from 'i18next';

export default async (state, inputEl, feedEl) => {
    await i18next.init({
        lng: 'ru',
        debug: true,
        resources: {
          ru: {
            translation: {
              urlErr: `Ссылка должна быть валидным URL`,
            },
          },
        },
      });

    if (state.valid) {
        inputEl.classList.remove('is-invalid');
        feedEl.textContent = "";
    } else {
        inputEl.classList.add('is-invalid');
        feedEl.textContent = i18next.t('urlErr');
    }
};