export default (state, inputEl) => {
    if (state.valid) {
        inputEl.classList.remove('is-invalid');
    } else {
        inputEl.classList.add('is-invalid');
    }
};