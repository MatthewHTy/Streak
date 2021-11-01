import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './Todo.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth, gituser, setEntries} from '../firebase/firebase';
import { useEffect } from 'react/cjs/react.development';

function TodoList() {

  const [user, loading] = useAuthState(auth);
        const history = useHistory();
      
        const [userdata, setuserdata] = useState({
          name: 'user',
          email: 'email',
          uid: '0',
          streak: 0,
          entries: [],
          highscore: 0
        })
      
        const gituserdata = async () => {
          setuserdata(await gituser(user)) 
        }
      
        useEffect(() => {
          if (loading) return;
          if (!user) return history.replace("/");
          gituserdata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [user, loading]);

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className="workout-for-today"></h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;