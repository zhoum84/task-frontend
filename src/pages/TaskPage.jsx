import { useState } from 'react'
import BackButton from '../components/BackButton'
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { deleteTodos, updateTodos, viewTodo } from '../features/task/taskSlice';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function TaskPage() {
  const task = JSON.parse(localStorage.getItem('task'));
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.length? user[0].id : user.id;
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(checkStatus(task));
  const [date_due, setDeadline] = useState(task.date_due);
  const [description, setDescription] = useState(task.description);
  const [complete, setComplete] = useState(task.complete)
  const [inProgress, setInProgress] = useState(task.in_progress);
  const statusElems = [...new Set(['Not-Started', 'In-Progress', 'Completed'].map(p => p))]




  function checkStatus(task) {
    if (task.completed) {
      return 'Completed'
    } else if (task.in_progress) {
      return 'In-Progress'
    } else {
      return 'Not-Started'
    }
  }


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const EditTask = async (e) => { setEditing(true); }
  const handleSubmit = async (e) => { 
    setEditing(false);
    const taskUpdate = {
      title,
      description,
      date_due,
      status,
      userId,
    } 
    const data = {
       uuid : task.uuid,
       task : JSON.stringify(taskUpdate)
    }
    dispatch(updateTodos(data))
    dispatch(viewTodo(userId))
    navigate('/home')
  }

  //delete task from database. return to home
  const DeleteTask = () => {
    dispatch(deleteTodos(task.uuid))
    dispatch(viewTodo(userId))
    navigate('/home')
  }

  return (
    <div className='task-page'>
      <header className='task-header'>
        <BackButton />
        <form onSubmit={handleSubmit}>
          {editing ? (<>
            <h2>Task:
              <input
                className='font-italic m-3 mb-5 block px-4'
                type="text"
                placeholder={title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </h2>
            <h3>Status:
              <select
                className="filter"
                aria-label="filter"
                value={status}
                onChange={(e) => setStatus(e.target.value)} >
                {statusElems.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </h3>
            <h3>Deadline:
              <DatePicker selected={new Date(date_due)} onChange={(e) => setDeadline(e)} />
            </h3>
            <hr />
            <div className='task-desc'>
              <h3>Task Description</h3>
              <input
                className='font-italic m-3 mb-5 block px-4'
                type="text"
                placeholder="Edit description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <h3>Complete</h3>
              <input
              type="checkbox"
              value={complete}
              onChange={(e) => setComplete(e.target.value)}/>
              <h3>In Progress</h3>
              <input
              type="checkbox"
              value={inProgress}
              onChange={(e) => setInProgress(e.target.value)}/>

            </div>
            <button onClick={handleSubmit} className='btn btn-block btn-edit'>Confirm</button>
            <button onClick={DeleteTask} className='btn btn-block btn-danger'>Cancel</button>
          </>) : (<>
            <h1>
              <span>{title}</span>
            </h1>
            <h2>
              <span className={`status status-${status}`}>{status}</span>
            </h2>
             <h3>Deadline: {date_due}</h3>
            <hr />
            <div className='task-desc'>
              <h3>Task Description</h3>
              <p>{description}</p>
            </div>
          </>
          )}
        </form>
      </header >

      {editing ? (<></>) : (
        <>
          <button onClick={EditTask} className='btn btn-block btn-edit'>Edit Task</button>
          <button onClick={DeleteTask} className='btn btn-block btn-danger'>Delete Task</button>
        </>
      )}

    </div >
  )
}

export default TaskPage