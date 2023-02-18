import { create } from 'zustand';
import { noAuthAxios } from '../../../config/config';

export const signup_store = create((set, get) => ({
    form_data: {
        name: "",
        email: "",
        password: ""
    },
    set_data: (data) => {
        set(state => ({
            form_data: {
                ...state.form_data,
                ...data
            }
        }))
    },
    clear_data: () => {
        set(state => ({
            form_data: {
                name: "",
                email: "",
                password: ""
            }
        }))
    },
    signup: async () => {
        let res = await noAuthAxios.post('/auth/register', get().form_data);
        if (res.data.status == 201) return true
        return false
    }
}))