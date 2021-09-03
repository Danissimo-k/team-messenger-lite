import {ChatEngine} from 'react-chat-engine';
 
import './App.css'

import ChatFeed from './components/ChatFeed';
import { LoginForm } from './components/LoginForm';
const App = () => {
    console.log(localStorage.getItem('username'))
    if (!localStorage.getItem('username')) {
        return <LoginForm/>}
    return(
        <ChatEngine 
            height = '100vh'
            projectID='c69da4ed-1fae-4a66-bd48-cb43663d1993'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}


        />
    )
}
export default App;