import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Task Tracker </Link>
        </div>
        <div>
            Team 58
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt/> Login
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header