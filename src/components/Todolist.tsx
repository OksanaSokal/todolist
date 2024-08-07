import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {Button} from './Button';
import {StatusType} from '../App';
import s from './todolist.module.css'

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
    changeStatus: (taskId: string, isDone: boolean) => void
}

export const Todolist = ({title, tasks, date, removeTask, filteredTask, addTask, changeStatus}: TodoListType) => {
    const [newTitle, setNewTitle] = useState('')

    const [error, setError] = useState<string | null>(null)

    const [nameButton, setNewButton] = useState('all')

    const changeFilterHandler = (value: StatusType) => {
        filteredTask(value)
        setNewButton(value)
    }

    const addTaskHandler = () => {
        if (newTitle.trim()) {
            addTask(newTitle.trim())
            setError(null)
        } else {
            setError('Title is required')
        }
        setNewTitle('')
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
        setError(null)
    }

    const changeStatusHandler = (taskId: string, value: boolean) => changeStatus(taskId, value)


    const mappedTasks =
        tasks.length === 0
            ? <p>Тасок нет</p>
            : <ul>
                {tasks.map((t) => {
                    const removeTaskHandler = () => removeTask(t.id);
                    // const changeStatusHandler = (e: ChangeEvent<HTMLInputElement> )=>changeStatus(t.id, e.currentTarget.checked)
                    return (
                        <li key={t.id} className={t.isDone ? s.isDone : ''}>
                            <input type="checkbox" checked={t.isDone}
                                   onChange={(e) => changeStatusHandler(t.id, e.currentTarget.checked)}/>
                          < span > {t.title}</span>
                    <Button title={'x'} onClick={removeTaskHandler}/>
                        </li>
                    )
                })}
            </ul>


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTitle}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                       className={error ? s.error : ''}
                />
                <button onClick={addTaskHandler}>+</button>
                {/*<Button title={'+'} onClick={addTaskHandler/>*/}
            </div>
            {error && <span className={s.errorMessage}>{error}</span>}
            {mappedTasks}
            <div>
                <Button className = {nameButton === 'all' ? s.activeFilter : ''} title={'All'} onClick={() => changeFilterHandler('all')}/>
                <Button className = {nameButton === 'active' ? s.activeFilter : ''} title={'Active'} onClick={() => changeFilterHandler('active')}/>
                <Button className = {nameButton === 'completed' ? s.activeFilter : ''} title={'Completed'} onClick={() => changeFilterHandler('completed')}/>
                {/*<button onClick={() => changeFilterHandler('all')}>All</button>*/}
                {/*<button onClick={() => changeFilterHandler('active')}>Active</button>*/}
                {/*<button onClick={() => changeFilterHandler('completed')}>Completed</button>*/}
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