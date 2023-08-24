import './App.css'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import Routes from './Routes'
axios.defaults.baseURL="http://localhost:4040"
axios.defaults.withCredentials=true
function App() {

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
