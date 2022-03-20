import * as yup from 'yup';
import render from './render.js';

const model = () => {
    const state = {
        valid: true,
        value: "",
        errors: []
    };

    const schema = yup.string().required().url();
    const form = document.querySelector('form');
    const input = form.elements.url;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        state.value = data.get('url');
        state.valid = schema.isValidSync(state.value);
        render(state, input);
    })
}

export default model();