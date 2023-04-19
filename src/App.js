import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header'
import AddTask from './pages/AddTask'
import TaskPage from './pages/TaskPage'
function App() {

  // hard coded is bad. 
  const [task, setTask] = useState([
    {
      _id: 1,
      title: 'Walk the dog',
      description: "walk for a few hours",
      status: "Incomplete",
      deadline: "4/19"
    },
    {
      _id: 2,
      title: 'Cook lunch',
      description: "Make sure it is edible",
      status: "In-Progress",
      deadline: "4/20"
    },
    {
      _id: 2,
      title: 'Do the laundry',
      description: "The laundry machine is broken",
      status: "Complete",
      deadline: "4/18"
    },
  
  ])
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/add-task' element={<AddTask />} />
            <Route path='/task/1' element={<TaskPage task={task[0]}/>} />
            <Route path='/task/2' element={<TaskPage task={task[1]}/>} />
            <Route path='/task/3' element={<TaskPage task={task[2]}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
