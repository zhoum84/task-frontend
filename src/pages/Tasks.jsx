import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Task from '../components/Task'

function Tasks({tasks, setTasks}) {
  // TODO:: 
  // tasks should get from api instead
  const [sort, setSort] = useState('Sort By')
  
  
  const changeStatus = (id) =>{
    
    setTasks(
        tasks.map((task) =>
        
          task.id === id ? { ...task, status: {}} : task
          
        
          
        )
      );
  }

  

  return (
    <>
      <BackButton />
      <h1>Tasks</h1>
      <div className='dropdown'> 
            <label className='dropdown' htmlFor='task'>Sort By</label>
            <select
              className='sort'
              name='task'
              id='task'
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value='Deadline Ascending'>Deadline Ascending</option>
              <option value='Deadline Descend'>Deadline Descending</option>
              <option value='Status Ascending'>Status Ascending</option>
              <option value='Status Descend'>Status Descending</option>
              <option value='Title'>Title</option>

            </select>
          </div>
      <div className='tasks'>
        <div className='task-headings'>
          <div>Deadline</div>
          <div>Task</div>
          <div>Status</div>
          <div></div>
        </div>
        {tasks.map((task) => (
          <div>
            <Task key={task._id} task={task} onToggle={changeStatus} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Tasks