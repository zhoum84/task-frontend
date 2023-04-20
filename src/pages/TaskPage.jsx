import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'

function TaskPage({ task }) {
  const [title, setTask] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [deadline, setDeadline] = useState(task.deadline);
  const [description, setDescription] = useState(task.description);
  const statusElems = [...new Set(['Incomplete', 'In Progress', 'Completed'].map(p => p))]

  // edit task. Should toggle all texts
  const [editing, setEditing] = useState(false);
  const EditTask = async (e) => {
    setEditing(true);
  }

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setEditing(false);
  }

  //delete task from database. return to home
  const DeleteTask = () => {

  }
  return (
    <div className='task-page'>
      <header className='task-header'>
        <BackButton />
        <form onSubmit={handleSubmit}>
          {editing ? (
            <>
              <h1>Task</h1>
              <h1>
                <input
                  className='font-italic m-3 mb-5 block px-4'
                  type="text"
                  placeholder="Add your task here"
                  value={title}
                  onChange={(e) => setTask(e.target.value)}
                />
              </h1>
              <h2>
              </h2>
              <select
                className="filter"
                aria-label="filter"
                value={status}
                onChange={(e) => setStatus(e.target.value)} >
                {statusElems.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <h3>
                Deadline:
                <input
                  className='font-italic m-3 mb-5 block px-4'
                  type="text"
                  placeholder="Edit deadline here"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
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
              <button className="btn btn-sm btn-primary me-2" onClick={(e) => handleSubmit(e)}>Confirm</button>
            </>
          ) : (
            <>
              <h1>
                <span>
                  {title}
                </span>
              </h1>
              <h2>
                <span className={`status status-${status}`}>
                  {status}
                </span>
              </h2>
              <h3>
                Deadline: {deadline}
              </h3>
              <hr />
              <div className='task-desc'>
                <h3>Task Description</h3>
                <p>{description}</p>
              </div>
            </>)}
        </form>
      </header >

      <button onClick={EditTask} className='btn btn-block btn-edit'>
        Edit Task
      </button>

      <button onClick={DeleteTask} className='btn btn-block btn-danger'>
        Delete Task
      </button>
    </div >
  )
}

export default TaskPage