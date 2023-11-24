import { nanoid } from "nanoid";

export default {
    state: () => ({
        notification: []
    }),
    mutations: {
        addCreate: (state, content) => {
            const newTodo = { id: nanoid(), message: content.message, status: content.type, completed: false };
            state.notification = [...state.notification, newTodo];
        },
        destroyNotification: (state, id) => {
            state.notification = state.notification.filter((todo) => todo.id !== id);
        }

    }
};
