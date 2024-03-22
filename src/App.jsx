import './App.css'
import Courses from './Components/Courses'
import Footer from './Components/Footer'
import Nav from './Components/Nav'

function App() {

  return (
    <>
      <Nav></Nav>
      <div className='md:h-screen'>
      <Courses></Courses>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
