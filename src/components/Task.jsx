import { Link } from 'react-router-dom'

function Task({ task, onToggle }) {
    
  return (
    <div className='task'>
      <div>{task.deadline}</div>
      <div>{task.title}</div>
      <div className={`status status-${task.status}`} onClick={() => onToggle(task._id)}>{task.status}</div>
      <Link to={`/task/${task._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default Task
