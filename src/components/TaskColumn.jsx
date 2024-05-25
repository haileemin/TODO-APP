import React from 'react'

import "./TaskColumn.css"

import Todo from "../assets/direct-hit.png"

const TaskColumn = (title, icon) => {
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt="" /> {title}
            </h2>
        </section>
    )
}

export default TaskColumn