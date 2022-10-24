import React, { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
const initTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

export default function App() {
  const [todoData, setTodoData] = useState(initTodoData);
  const [value, setValue] = useState("");
  // state는 내용이 변하면 화면을 re-rendering한다.
  // vue의 ref처럼
  // 할일 목록을 관리할 데이터 구성
  // react에서 css를 {} 생성하는법

  // 할 일 저장 관련
  const formSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // todoData 를 업데이트 한다.
    // this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    setValue("");
  };
  const allDelete = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };
  return (
    // JSX는 기본적으로 하나의 Root 태그가 필요하다.
    <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="title flex justify-between mb-3">
          <h1>할일 목록</h1>
          <button onClick={allDelete}>Delete All</button>
        </div>
        <Form formSubmit={formSubmit} value={value} setValue={setValue} />
        <Lists todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
