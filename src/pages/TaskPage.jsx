import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'

function TaskPage({task}){

    // edit task. Should toggle all texts
    const EditTask = () => {

    }

    //delete task from database. return to home
    const DeleteTask = () =>{

    }
    return (
        <div className='task-page'>
          <header className='task-header'>
            <BackButton />
            <h1>
              <span>
                {task.title}
              </span>
            </h1>
            <h2>
              <span className={`status status-${task.status}`}>
                {task.status}
              </span>
            </h2>
            <h3>
              Deadline: {task.deadline}
            </h3>
            <hr />
            <div className='task-desc'>
              <h3>Task Description</h3>
              <p>{task.description}</p>
            </div>
          </header>
    
    
          <button onClick={EditTask} className='btn btn-block btn-edit'>
            Edit Task
          </button>
        
          <button onClick={DeleteTask} className='btn btn-block btn-danger'>
            Delete Task
          </button>
        </div>
      )
}

export default TaskPage