import React, { useEffect, useState } from 'react'

import "./TodoApp.css"
import TaskForm from "./TaskForm";
import TaskColumn from './TaskColumn';
import todoIcon from '../../assets/direct-hit.png'
import doingIcon from '../../assets/glowing-star.png'
import doneIcon from '../../assets/check-mark-button.png'
import LoginSignup from '../LoginSignup/LoginSignup';
import { Link, useNavigate } from 'react-router-dom';

const oldTask = localStorage.getItem("tasks")
console.log(oldTask);
// const userStorage = localStorage.getItem("userLogin")
// console.log(userStorage);

const TodoApp = () => {
    const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
    const [userLogin, setUserLogin] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const userLogin = JSON.parse(localStorage.getItem('userLogin'));
        if (userLogin) {
            setUserLogin(userLogin);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleDelete = (taskIndex) => {
        const newTasks = tasks.filter((task, index) => index !== taskIndex)
        setTasks(newTasks)
    };

    const onDrop = (status, position) => {
        console.log(`${activeCard} is going to place into ${status} and at the position ${position}`);

        if (activeCard == null || activeCard === undefined) return;

        const taskTomove = tasks[activeCard];
        const updatedTasks = tasks.filter((task, index) => index !== activeCard)

        updatedTasks.splice(position, 0, {
            ...taskTomove,
            status: status
        })

        setTasks(updatedTasks)
    };

    const handleLogout = () => {
        localStorage.removeItem('userLogin')
        navigate('/')
    }

    return (

        <div className='app'>
            <div class='navigate'>
                {userLogin ?
                    <>
                        <span>{userLogin.email}</span>
                        <button className='logout' onClick={handleLogout}>dăng xuất</button>
                    </> :
                    <Link to={'/LoginSigup'}><button>đăng nhập</button></Link>

                }


                {/* <LoginSignup /> */}
            </div>
            <TaskForm setTasks={setTasks} />
            <main className='app_main'>
                <TaskColumn
                    title="To do"
                    icon={todoIcon}
                    tasks={tasks}
                    status="todo"
                    handleDelete={handleDelete}
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                />
                <TaskColumn
                    title="Doing"
                    icon={doingIcon}
                    tasks={tasks}
                    status="doing"
                    handleDelete={handleDelete}
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                />
                <TaskColumn
                    title="Done"
                    icon={doneIcon}
                    tasks={tasks}
                    status="done"
                    handleDelete={handleDelete}
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                />

            </main>
        </div>
    )
}

export default TodoApp