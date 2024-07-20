import React from 'react';
import {Button} from './Button';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListType = {
    title: string
    tasks: TaskType[]
    date?: string
}

export const Todolist = ({title, tasks, date}: TodoListType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
                <Button title={'+'}/>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map((t) => {
                        return <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span></li>
                    })}
                </ul>

            )}
            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
            </div>
            <div>{date}</div>
        </div>
    )
}