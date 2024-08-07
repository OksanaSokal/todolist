import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {v1} from 'uuid';

export type StatusType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState( [
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Typescript', isDone: false },
        { id: v1(), title: 'RTK query', isDone: false },
    ])

    let [filter, setFilter] = useState<StatusType>('all')

    const addTask = (newTitle: string) => {
        const newTask = {
            id: v1(),
            title: newTitle || 'New Task',
            isDone: false
        }
        setTasks([newTask,...tasks])
    }

    const changeStatus = (taskId: string,newIsDone: boolean) => {
        setTasks(tasks.map(el=> el.id === taskId ? {...el, isDone: newIsDone} : el))
    }

    // const changeStatus = (taskId: string,isDone: boolean) => {
    //    const currentTask = tasks.find((el) => {
    //        return el.id === taskId
    //    })
    //     if (currentTask) currentTask.isDone = isDone
    //     setTasks([...tasks])
    // }

    function removeTask(id: string) {
         let filteredTasks = tasks.filter(el=>el.id !== id)
        setTasks(filteredTasks)
    }
    let tasksForTodolist = tasks;

    if(filter === 'active') {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }

    if(filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone )
    }

    function filteredTask(value: StatusType) {
        setFilter(value)
    }
    return (
        <div className="App">
            <Todolist title = {'What to learn?'} tasks = {tasksForTodolist} removeTask={removeTask} filteredTask={filteredTask} addTask = {addTask} changeStatus={changeStatus}/>
        </div>
    );
}

export default App;
