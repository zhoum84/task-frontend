import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'

function Login(props) {

  const [formData, setFormData] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    console.log("target val fron login: ", e.target.value)
    props.sendRequest(e.target.value)
    setFormData(e.target.value)
  }
  
  //get user data
  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please enter your name to continue</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              value={formData}
              onChange={handleChange}
              placeholder='Enter your username'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
