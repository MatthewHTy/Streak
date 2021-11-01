import React, { useState, useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth, gituser } from '../firebase/firebase';
import './Todo.css';

function TodoForm(props) {

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

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
        <div className="edit-form-update"> 
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
            </div>
        </>
      ) : (
        <>
        <div className="exercise-form">

          <input
            placeholder='Exercise'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
            />
          <button onClick={handleSubmit} className='todo-button'>
            Add Exercise
          </button>
            </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;