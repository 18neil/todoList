import React, { useState } from 'react';
import { useTodo } from '../context/todoContext';

export default function TodoAdd() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;

        addTodo({
           
            todo,
            completed: false // Assuming a `completed` property is needed
        });
        setTodo("");
    };

    return (
        <>
            <form onSubmit={add}>
                <input
                    className='p-4 w-1/2 rounded-s-md'
                    type="text"
                    placeholder='Write Your ToDos.........'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    className='p-4 w-1/6 rounded-e-md font-bold text-stone-50 bg-blue-400'
                    type="submit"
                >
                    Add
                </button>
            </form>
        </>
    );
}
