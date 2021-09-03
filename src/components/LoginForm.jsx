import { useState } from "react"
import axios from "axios"
export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error , setError] = useState('')


    const handleSubmit = async(e) => {
        e.preventDefault()
        const authObject = {
            'Project-ID':'c69da4ed-1fae-4a66-bd48-cb43663d1993',
            'User-Name':username,
            'User-Secret': password

        }
        try {
            console.log(authObject)
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})
            
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)

            window.location.reload()

        } catch (error) {
            setError('Wow, something go wrong')
        }

    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align='center'>
                        <button type="submit" className="button">
                            <span>Let's chat</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>
        </div>
    )
}