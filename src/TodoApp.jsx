import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1)
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    // console.log(todo);

    const nextTodo = () => {
        setTodoId((value) => value + 1)
    }

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId((value) => value - 1)
    }
    return (
        <>
            <h1> Todos - RTK Query </h1>
            <hr />
            <h4> isLoading: {isLoading ? 'TRUE' : 'FALSE'} </h4>
            <pre>...</pre>

            <button onClick={prevTodo}> Prev TODO</button>
            <button onClick={nextTodo}> Next TODO</button>

            <div>
                {
                    JSON.stringify(todo)
                }
            </div>

            {/* <ul>
                {
                    todos.map(({ id, title, completed }) => (
                        <li style={{ textAlign: 'start' }} key={id}>
                            <strong> {completed ? 'DONE' : 'WIP'} </strong>
                            {title}

                        </li>
                    ))
                }
            </ul> */}

        </>
    )
}
