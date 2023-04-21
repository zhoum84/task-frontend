import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header'
import AddTask from './pages/AddTask'
import TaskPage from './pages/TaskPage'


function App() {

  const [user, setUser] = useState('');
  const sendRequest = (str) => { setUser(str); }

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/home' element={<Home user={user} />} />
            <Route path='/' element={<Login sendRequest={sendRequest} />} />
            <Route path='/add-task' element={<AddTask user={user} />} />
            <Route path='/task/:id' element={<TaskPage user={user} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
