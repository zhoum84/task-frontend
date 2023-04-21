import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header(props) {
  const username = JSON.parse(localStorage.getItem("user"));
  const user = username.name;

  console.log(user);
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
          <Link to='/login'>
            <FaSignInAlt /> Login
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header