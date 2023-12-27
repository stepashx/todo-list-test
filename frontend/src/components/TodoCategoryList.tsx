import React from 'react';
import style from './TodoCategoryList.module.scss';
import {Todo} from "../utlis/Todo.type.ts";

interface Props {
    color: string,
    title: string,
    todos: Todo[]
}

const TodoCategoryList:React.FC<Props> = ({ color, title, todos }) => {
    const categoryStatus = title.replace('_', ' ').toLowerCase();

    const splitted = categoryStatus.split("")

    const first = splitted[0].toUpperCase()

    const rest = [...splitted]

    rest.splice(0, 1)

    const result = [first, ...rest].join("")

    return (
        <div className={style.wrapper}>
            <div className={style.title} style={{backgroundColor: color}}>{result}</div>
            {
                todos.map(e => (
                    <h3 key={e.id}>{e.title}</h3>
                ))
            }
        </div>
    );
};

export default TodoCategoryList;