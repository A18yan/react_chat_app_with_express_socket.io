import { create } from 'zustand';
import { noAuthAxios } from '../../../config/config';

export const login_store = create((set, get) => ({
    form_data: {
        email: '',
        password: ''
    },
    set_data: (data) => set(state => ({
        form_data: {
            ...state.form_data,
            ...data
        }
    })),
    clear_data: () => set(state => ({
        form_data: {
            email: '',
            password: ''
        }
    })),
    login: async () => {
        let res = await noAuthAxios.post('/auth/login', get().form_data);
        console.log(res)
        if (res.data.status == 200) {
            localStorage.setItem('token', res.data.token);
            return true
        }
        return false
    }
}))