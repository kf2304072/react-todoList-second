import React from "react";

export const InputText = (props)=>{
    const {todos, onChange, onClickAdd} = props
    return (
        <div className="todo-registration">
        <input type='' placeholder='タスクを入力' value={todos} onChange={onChange} />
        <p><button onClick={onClickAdd}>Todo登録</button></p>
      </div>
    )
}