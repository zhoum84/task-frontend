import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import {useSelector} from 'react-redux'


function AddTask() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate()

  // Need to create new task and add to database
  const onSubmit = (e) => {
    e.preventDefault()



    navigate('/')
  }

  return (
    <>
      <section className='heading'>
        <h1>Add New Task</h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='task'>Task Title</label>
            <input type='text'
              className='form-control' placeholder='Add task here' value={task} onChange={(e) => setTask(e.target.value)}></input>
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Task Description</label>
            <textarea name='task' id='task'
              className='form-control' placeholder='Add description here' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className='form-group'>
            <form >
              <label htmlFor="date">Task Deadline</label>
              <input type='text'
                className='form-control' placeholder='Add date here' value={date} onChange={(e) => setDate(e.target.value)}></input>
            </form>
          </div>
          <div className='form-group' >
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddTask