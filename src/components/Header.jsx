import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice.js'

function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = JSON.parse(localStorage.getItem("user"));


  let user;
  if(username !== null){
    user = username.name;
  }

  const onPress = () =>{
    dispatch(logout());
    navigate('/login');
  }
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Task Tracker </Link>
      </div>
      <div>
        {user}
      </div>
      <ul>
        <li>
          {!user ?
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          : <li>
              <button className='btn' onClick={onPress}> 
                <FaSignOutAlt /> Logout
              </button>
            </li>
           }
        </li>
      </ul>
    </header>
  )
}

export default Header