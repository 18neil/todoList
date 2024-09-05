import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos : [{
        id:1,
        todo:"Demo text",
        completed : false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCheck: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
};
