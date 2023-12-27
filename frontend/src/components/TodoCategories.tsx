import React, {useEffect, useState} from 'react';
import style from './TodoCategories.module.scss';
import TodoCategoryList from "./TodoCategoryList.tsx";
import NewTodoForm from "./NewTodoForm.tsx";
import axios from "axios";
import {Todo} from "../utlis/Todo.type.ts";
import {filterByStatus} from "../utlis/filterByStatus.ts";

const TodoCategories:React.FC = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>([]);
    // const [notStartedTodos, setNotStartedTodos] = useState<Todo[]>([]);
    // const [inProgressTodos, setInProgressTodos] = useState<Todo[]>([]);
    // const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:3000/api/task');

            setTodos(response.data);
        }

        fetchTodos();

        // setNotStartedTodos(filterByStatus(todos, 'NOT_STARTED'));
        // setInProgressTodos(filterByStatus(todos, 'IN_PROGRESS'));
        // setCompletedTodos(filterByStatus(todos, 'COMPLETE'));
    }, []);

    console.log(todos);

    const categories = [
        {color: '#ffe2dd', title: 'NOT_STARTED'},
        {color: '#feecc8', title: 'IN_PROGRESS'},
        {color: '#dceddc', title: 'COMPLETE'},
    ]

    const changeEditMode = () => {
        setEditMode(!editMode);
    }

    return (
        <>
            <div className={style.wrapper}>
                {
                    categories.map(c => (
                        <TodoCategoryList key={c.title} color={c.color} title={c.title} todos={
                            todos.filter(e => {
                                if (e.status === c.title) {
                                    return e;
                                }
                            })
                        }/>
                    ))
                }
                <button onClick={() => setEditMode(true)} className={style.addButton}>New</button>
            </div>
            { editMode && <NewTodoForm changeEditMode={changeEditMode}/> }
        </>
    );
};

export default TodoCategories;