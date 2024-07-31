import React, {useRef, useState} from 'react';
import {Button} from './Button';
import {StatusType} from '../App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    title: string
    tasks: TaskType[]
    date?: string
    removeTask: (id: string) => void
    filteredTask: (value: StatusType) => void
    addTask: (newTitle: string) => void
}

export const Todolist = ({title, tasks, date, removeTask, filteredTask, addTask}: TodoListType) => {
    const [newTitle, setNewTitle] = useState('')

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTitle} onChange={(event) => {
                    setNewTitle(event.currentTarget.value)
                }}/>
                <button onClick={(event) => {
                    addTask(newTitle)
                    setNewTitle('')
                }
                }>+
                </button>
                {/*<Button title={'+'} callback={addTask}/>*/}
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map((t) => {
                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <Button title={'x'} callback={() => removeTask(t.id)}/>
                            </li>
                        )
                    })}
                </ul>

            )}
            <div>
                {/*<Button title={'All'} callback={filteredTask}/>*/}
                {/*<Button title={'Active'} callback={filteredTask}/>*/}
                {/*<Button title={'Completed'} callback={filteredTask}/>*/}
                <button onClick={() => filteredTask('all')}>All</button>
                <button onClick={() => filteredTask('active')}>Active</button>
                <button onClick={() => filteredTask('completed')}>Completed</button>
            </div>
            <div>{date}</div>
        </div>
    )
}


//------------------------------------------------------------------------------------------------------
//
// import React, {useRef} from 'react';
// import {Button} from './Button';
// import {StatusType} from '../App';
//
// type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }
//
// type TodoListType = {
//     title: string
//     tasks: TaskType[]
//     date?: string
//     removeTask: (id: string) => void
//     filteredTask: (value: StatusType) => void
//     addTask: (value: string) => void
// }
//
// export const Todolist = ({title, tasks, date, removeTask, filteredTask, addTask}: TodoListType) => {
//
//     const inputRef = useRef<HTMLInputElement>(null)
//     return (
//         <div>
//             <h3>{title}</h3>
//             <div>
//                 <input ref={inputRef}/>
//                 <button onClick={() => {
//                     if (inputRef.current) {
//                         addTask(inputRef.current.value)
//                     }
//                 }}>+
//                 </button>
//             </div>
//             {tasks.length === 0 ? (
//                 <p>Тасок нет</p>
//             ) : (
//                 <ul>
//                     {tasks.map((t) => {
//                         return (
//                             <li key={t.id}>
//                                 <input type="checkbox" checked={t.isDone}/>
//                                 <span>{t.title}</span>
//                                 <Button title={'x'} callback={() => removeTask(t.id)}/>
//                             </li>
//                         )
//                     })}
//                 </ul>
//
//             )}
//             <div>
//                 <button onClick={() => filteredTask('all')}>All</button>
//                 <button onClick={() => filteredTask('active')}>Active</button>
//                 <button onClick={() => filteredTask('completed')}>Completed</button>
//             </div>
//             <div>{date}</div>
//         </div>
//     )
// }