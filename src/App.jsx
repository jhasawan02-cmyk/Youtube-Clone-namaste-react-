import './App.css' 
import Header from './Components/Header'
import Body from './Components/Body'


function App() {
  return (
    <div className=' flex-col h-screen overflow-scroll'>
      <Header />
      <Body />
    </div>
  )
}

export default App