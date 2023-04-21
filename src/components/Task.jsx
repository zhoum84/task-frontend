import { Link } from 'react-router-dom'

function checkStatus(task) {
  if (task.completed) {
    return 'Completed'
  } else if (task.in_progress) {
    return 'In-Progress'
  } else {
    return 'Not-Started'
  }
}

function Task({ task, onToggle }) {
  return (
    <div className='task'>
      <div>{task.date_due}</div>
      <div>{task.title}</div>
      <div>{task.description}</div>
      <div className={`status status-${task.status}`} >{checkStatus(task)}</div>
      <Link to={`/task/${task.uuid}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default Task
