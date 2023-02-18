import { create } from "zustand";
import { authAxios, noAuthAxios } from "../../config/config";

export const message_store = create((set) => ({
    users: [],
    to:'',
    get_users: async () => {
        const res = await noAuthAxios.get('/auth/all-users')
        if (res.data.status === 200) {
            set(state => ({
                users: res.data.users
            }))
        }
    },
    set_to: (data)=>{
        set(state => ({
            to: data
        }))
    }
}))
