import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Task from '../components/Task'
import { Link } from 'react-router-dom'

function Tasks(props) {
  // TODO:: 
  // tasks should get from api instead
  const [sort, setSort] = useState('Sort By')

  const changeStatus = (id) => {
    props.tasks.map((task) => {
      if (task.id === id) {
        task.status = task.status === 'Incomplete' ? 'In Progress' : 'Complete'
      }
    })
  }

  const list = ['Deadline Ascending', 'Deadline Descending', 'Status Ascending', 'Status Descending', 'Title']

  return (
    <>
      {/* <BackButton /> */}
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
          {list.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
      </div>
      <div className='tasks'>
        <div className='task-headings'>
          <div>Deadline</div>
          <div>Task</div>
          <div>Status</div>
          <div></div>
        </div>
        {/* {props.tasks && props.tasks.map((task) => ( */}
        {props.tasks.map((task) => (
          <div>
            <Link to={`/view_todo/${task.id}`}><Task key={task.id} task={task} onToggle={changeStatus} /></Link>
            {/* <Link><Task key={task.id} task={task} /></Link> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Tasks