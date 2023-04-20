import { Link } from 'react-router-dom'

function Task({ task, onToggle }) {

  return (
    <div className='task'>
      <div>{task.date_due}</div>
      <div>{task.title}</div>
      <div className={`status status-${task.status}`} onClick={() => onToggle(task.uuid)}>{task.status}</div>
      <Link to={`/task/${task.uuid}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default Task
