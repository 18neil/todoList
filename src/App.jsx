import React, { useEffect, useState } from 'react';
import './App.css';
import TodoAdd from './component/TodoAdd';
import TodoList from './component/TodoList';
import { TodoContextProvider } from './context/todoContext';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo)));
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
    };

    const toggleCheck = (id) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)));
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));

        if (Array.isArray(storedTodos)) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContextProvider value={{ addTodo, updateTodo, deleteTodo, toggleCheck, todos }}>
            <h1 className='w-full bg-cyan-200 text-4xl rounded-lg py-6 font-bold text-red-400'>
                Todo List
            </h1>
            <div className='p-7 mt-2 rounded-md bg-orange-200'>
                <TodoAdd />
            </div>
            <div className='mt-1 bg-gray-300 w-full p-4 rounded-lg mt-2'>
                {todos.map((todo) => (
                    <div key={todo.id} className='w-full'>
                        <TodoList todo={todo} />
                    </div>
                ))}
            </div>
        </TodoContextProvider>
    );
}

export default App;
