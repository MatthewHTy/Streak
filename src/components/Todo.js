import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './Todo.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, gituser } from '../firebase/firebase';
import { useHistory } from 'react-router';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

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

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className="exercise-form-added">

    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
      >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
          />
      </div>
    </div>
          </div>
  ));
};

export default Todo;