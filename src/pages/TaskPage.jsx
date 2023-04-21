import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { updateTodos } from '../features/task/taskSlice';
// import { useParams } from 'react-router-dom';

function TaskPage(props) {
  console.log("Tasks page props: ",props)
  const user = JSON.parse(localStorage.getItem("user"));
  const [task, setTask] = useState({})
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(checkStatus(task));
  const [date_due, setDeadline] = useState(task.date_due);
  const [description, setDescription] = useState(task.description);
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

  const dispatch =useDispatch();
  useEffect((id) => {
    dispatch(updateTodos(id))
  }, [dispatch])

  // edit task. Should toggle all texts
  const [editing, setEditing] = useState(false);
  const EditTask = async (e) => { setEditing(true); }
  const handleSubmit = async (e) => { setEditing(false); }

  //delete task from database. return to home
  const DeleteTask = () => {

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
                placeholder="Add your task here"
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
            {/* <h3>date_due: {date_due.toISOString().split('T')[0]}</h3> */}
            {/* <h3>Deadline: {date_due}</h3> */}
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