import { create } from "zustand";
import { authAxios, noAuthAxios } from "../../config/config";
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');
export const message_store = create((set, get) => ({
  users: [],
  to: {
    id: "",
    name: "Me",
  },
  message: {
    receiver: "",
    message: "",
    date: new Date(),
    image: [],
  },
  get_users: async () => {
    const res = await noAuthAxios.get("/auth/all-users");
    if (res.data.status === 200) {
      set((state) => ({
        users: res.data.users,
      }));
    }
  },
  set_to: (data) => {
    set((state) => ({
      to: {
        ...state.to,
        id: data._id,
        name: data.name,
      },
    }));
  },
  set_message: (data) => {
    set((state) => ({
      message: {
        ...state.message,
        ...data,
      },
    }));
  },
  send_message: () => {
    const data = {
      ...get().message,
      to: get().to.id,
    };
    console.log(data);
    socket.emit("send-message", data);
  },
}));
