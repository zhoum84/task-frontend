import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header'
import AddTask from './pages/AddTask'
import TaskPage from './pages/TaskPage'
import Tasks from './pages/Tasks';

function App() {

  const [user, setUser] = useState('');
  const sendRequest = (str) => { setUser(str); }
  console.log("user:", user)

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login sendRequest={sendRequest} />} />
            <Route path='/add-task' element={<AddTask />} />
            <Route path='/task' element={<Home user={user} />} />
            <Route path='/task/:id' element={<TaskPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
