import { useState } from 'react'
import Task from '../components/Task'
import { Link } from 'react-router-dom'


function Tasks(props) {
  const [tasks, setTasks] = useState()
  const [sortValue, setSortValue] = useState()
  const [isListSorting, setIsListSorting] = useState(false)


  const onClickView = (id) =>{
    localStorage.setItem("task",JSON.stringify(props.tasks.filter(a => a['uuid'] === id)[0]))
  }

const list = ['Deadline Ascending', 'Deadline Descending', 'Status Ascending', 'Status Descending', 'Title Ascending', 'Title Descending']


  const sortBy = (value) => {
    let sortedValue;
    switch(value) {
      case ('Title Ascending'):
        setSortValue(list['Title Ascending'])
        sortedValue = [...props.tasks].sort((a,b) => a.title > b.title ? 1 : -1,);
      break;
      case ('Title Descending'):
        setSortValue(list['Title Descending'])
        sortedValue = [...props.tasks].sort((a,b) => a.title > b.title ? -1 : 1,);
      break;
      case ('Status Ascending'):
        setSortValue(list['Status Ascending'])
        sortedValue = [...props.tasks].sort((a,b) => a.status > b.status ? 1 : -1,);
      break;
      case ('Status Descending'):
        setSortValue(list['Status Descending'])
        sortedValue = [...props.tasks].sort((a,b) => a.status > b.status ? -1 : 1,);
      break;  
      case ('Deadline Ascending'):
        setSortValue(list['Deadline Ascending'])
        sortedValue = [...props.tasks].sort((a,b) => a.date_due > b.date_due ? 1 : -1,);
      break;
      case ('Deadline Descending'):
        setSortValue(list['Deadline Descending'])
        sortedValue = [...props.tasks].sort((a,b) => a.date_due > b.date_due ? -1 : 1,);
      break;
      default:
      setSortValue(list['Deadline Ascending'])
      sortedValue = [...props.tasks].sort((a,b) => a.date_due > b.date_due ? -1 : 1,);
    }
    setTasks(sortedValue)
    setIsListSorting(true)
    
  }
  

  return (
    <>
      <h1>Tasks</h1>
      <div className='dropdown'>
        <label className='dropdown' htmlFor='task'>Sort By</label>
        <select
          className='sort'
          name='task'
          id='task'
          value={sortValue}
          onChange={(e) => sortBy(e.target.value)}
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
          <div>Description</div>
          <div>Status</div>
        </div>
        {isListSorting? 
        (tasks.map((task) => (
          <div>
            <Link to={`/task/${task.uuid}`} onClick={onClickView(task.uuid)}><Task key={task.id} task={task} /></Link>
          </div>
        ))) : 
        (props.tasks.map((task) => (
          <div>
            <Link to={`/task/${task.uuid}`} onClick={onClickView(task.uuid)}><Task key={task.id} task={task} /></Link>
          </div>
        )))}
      </div>
    </>
  )
}

export default Tasks