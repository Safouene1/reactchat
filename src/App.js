import {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed.jsx' 
const App = () => {
  return ( 
    <ChatEngine 
    height="100vh"
    projectID="b84c546f-5095-4d5a-b514-fc3adbc9ed28"
    userName="safouen"
    userSecret="1212"
    renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
   );
}
 
export default App;
