import React, { useState, useEffect, useRef } from "react";
// (e) = event, do Js
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.floor(Math.random() * 10000);
    props.onSubmit({
      id: newId,
      text: input,
    });
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange} //Evento de mudança,controlando a mudança do input
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
