import './App.css' 
import Header from './Components/Header'
import Body from './Components/Body';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='flex-col h-screen overflow-hidden'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App