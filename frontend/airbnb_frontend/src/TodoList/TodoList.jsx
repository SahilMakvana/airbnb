import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
    const [values, setValue] = useState("");
    const [todos, setTodo] = useState([]);

    function addValue(e) {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    function addTodo() {
        todos.push({ task: values, id: uuidv4(), done: false });
        setValue("");
        setTodo([...todos]);
    }

    function deleteTask(id) {
        let newArr = todos.filter((todo) => todo.id != id);
        setTodo([...newArr]);
    }

    function upperCaseAll() {
        let upperValues = todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        });
        setTodo([...upperValues]);
    }

    function upperCaseOne(id) {
        let upperValues = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            } else {
                return todo;
            }
        });
        setTodo([...upperValues]);
    }

    function lowerCaseAll() {
        let upperValues = todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toLowerCase(),
            };
        });
        setTodo([...upperValues]);
    }

    function lowerCaseOne(id) {
        let upperValues = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toLowerCase(),
                };
            } else {
                return todo;
            }
        });
        setTodo([...upperValues]);
    }

    function markAsDone(id) {
        let markedDone = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    done: true,
                };
            } else {
                return todo;
            }
        });
        setTodo([...markedDone]);
    }

    return (
        <div>
            <input onChange={addValue} type="text" placeholder="Add a task" value={values} />
            &nbsp;
            <button onClick={addTodo}>Add Task</button>
            <br />
            <hr />
            <h4>Todo List</h4>
            <hr />
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {todos.length === 0 ? (
                    <li>Add something...</li>
                ) : (
                    todos.map((todo) => {
                        return (
                            <li style={{ display: "flex", justifyContent: "space-between" }} key={todo.id}>
                                <span style={{ textAlign: "left", textDecoration: todo.done == true ? "line-through" : "" }}>{todo.task}</span>
                                <div>
                                    <i onClick={() => markAsDone(todo.id)} class="fa-solid fa-circle-check"></i> &nbsp;
                                    <i onClick={() => upperCaseOne(todo.id)} class="fa-regular fa-circle-up"></i> &nbsp;
                                    <i onClick={() => lowerCaseOne(todo.id)} class="fa-regular fa-circle-down"></i> &nbsp;
                                    <i onClick={() => deleteTask(todo.id)} className="fa-regular fa-trash-can"></i>
                                </div>
                            </li>
                        );
                    })
                )}
            </ul>
            <hr />
            <button onClick={upperCaseAll}>Uppercase All</button>&nbsp;
            <button onClick={lowerCaseAll}>Lowercase All</button>
        </div>
    );
};

export default TodoList;
