import React from "react";

export const Tasklist = (props) =>{
    const {tasks, clickDelete, clickEdit} = props
    return(
    <div className='todo-task-list'>
        <div className='task-list'>
            <p>タスクの一覧</p>
        </div>
        {tasks.map((todo,index) =>{
            return (

        <div className='todo-list' key={todo}>
            <input type='checkbox' />
            <p>{todo}</p>
            <div className='todo-button'>
            <button onClick={() => clickEdit(index)} className='todo-edit'>編集</button>
            <button onClick={() => clickDelete(index)} className='todo-delete'>削除</button>
        </div>
        </div>
            )
        })}
    </div>
    )
}