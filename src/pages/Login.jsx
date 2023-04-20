import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [username, setUsername] = useState('')


  const navigate = useNavigate()


  const onChange = (e) => {
    setUsername((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  //get user data
  const onSubmit = async (e) => {
    e.preventDefault()


    const res = await fetch(`https://challenge2-django.onrender.com/users/${username}`,{
      method: 'GET'
    })

    let user = res.json();

    //account creation
    if (user === null)
    {
      const res2 = await fetch('https://challenge2-django.onrender.com/',{
        method: 'POST',
        body: {
          'name': {username}
        }
      })

      user = res2.json();
    }
    // feels a bit dumb to just pass around user data... 
    // i was planning on using react redux + local storage but thats a bit annoying
    // any alternatives?
    navigate('/', {user})
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
              type='username'
              className='form-control'
              id='username'
              name='username'
              value={username}
              onChange={onChange}
              placeholder='Enter your name'
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
