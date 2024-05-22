// import './App.css'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import bgDown from '../src/assets/logo/BG Wave.png'

function App() {

  return (
    <>
      <div className=' font-poppins bg-[#F7F8F9] pb-8'>
        <Navbar></Navbar>
        <Login></Login>
      </div>
      <div className=' mb-3'>
        <img src={bgDown} className='w-[100vw] object-cover' alt='bgDown' />
      </div>
    </>
  )
}

export default App
