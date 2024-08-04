import Login from './components/Login'
import Logout from './components/Logout'
import User from './components/User'

function App() {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full flex justify-center'>
          <Login />
        </div>
        <div>
          <User />
        </div>
        <div className='w-full max-w-[400px]'>
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default App
