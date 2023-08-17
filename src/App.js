import { useState } from 'react';
import './App.css';
import { InputText } from './components/InputText.jsx';
import { Tasklist } from './components/Tasklist';


function App() {
  //input textのuseState
  const [todos, setTodos] = useState("");

  //タスク一覧項目のuseState
  const [tasks, setTasks] = useState([])



//inputにtextを入力した関数
const onChangeText = (e) =>{
  return setTodos(e.target.value)
}

  //todo登録ボタンを押下し、inputoのtextをタスク一覧に追加する関数
const onClickAdd = () =>{
  if(todos ==="") return
  const newTodo = [...tasks,todos]
  setTasks(newTodo)
  setTodos("")
}

//削除ボタンを押下し、タスク一覧から削除する関数
const onClickDelete = (index)=>{
  const todoDelete = [...tasks];
  todoDelete.splice(index,1);
  setTasks(todoDelete)
}

//編集ボタンを押下し、textを編集する
const onClickEdit = () =>{
  const clicEdit = [...tasks];


}

  return (
    <>
      <InputText todos={todos} onChange={onChangeText} onClickAdd={onClickAdd}/>
      <Tasklist tasks={tasks} clickDelete={onClickDelete} clickEdit={onClickEdit}/>
    </>

  );
}

export default App;
