import * as yup from 'yup';
import render from './render.js';

const model = () => {
    const state = {
        valid: true,
        value: "",
        error: ""
    };

    const schema = yup.string().required().url();
    const form = document.querySelector('form');
    const feedEl = document.querySelector('.feedback');
    const input = form.elements.url;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        state.value = data.get('url');
        state.valid = schema.isValidSync(state.value);
        state.error = await schema.validate(state.value).catch((err) => { return err.message });
        render(state, input, feedEl);
    })
}

export default model();