import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "./UserContext"
export default function Register(){
const [username,setUserName] = useState('')
const [password,setPassword] = useState('')
const [isRegisterOrLogin,setIsRegisterOrLogin] = useState('register')
const {setId, setUsername:setLoggedInUsername}=  useContext(UserContext)
const handleSubmit =async(e)=>{

    e.preventDefault()

    const url = isRegisterOrLogin==='register'?'/register':'/login'
const {data} = await axios.post(url,{username,password})
setId(data.userId)
setLoggedInUsername(username)
}
    return (
        <div className="bg-blue-50 h-screen flex items-center " >
            <form onSubmit={handleSubmit} className="w-64 mx-auto mb-12" action="">
                <input type="text" placeholder="username" value={username} onChange={e=>setUserName(e.target.value)} className="border block w-full rounded-sm mb-2 p-2" />
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" className="border block w-full rounded-sm mb-2 p-2" />
                <button className="bg-blue-500 text-white w-full rounded-sm p-2">{isRegisterOrLogin==='register'?'Register':'Login'}</button>
               {

               isRegisterOrLogin==='register'?(

                <div className="text-center mt-2">
                    Already a member? <button onClick={()=>{
                        setIsRegisterOrLogin('login')
                    }}>Login</button>
                </div>
               ):
               <div className="text-center mt-2">
                    {"Don't have an account?"} <button onClick={()=>{
                        setIsRegisterOrLogin('register')
                    }}>Register</button>
                </div>    
               }
            </form>

        </div>
    )
}