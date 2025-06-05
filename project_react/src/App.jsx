import './App.css'
import Message from './Message';


function App() {
  return (
    <div>
    <Message type='alert' text="ceci est un test 1" />
    <Message type='info' text="ceci est un test 2" />
    <Message type='success' text="ceci est un test 3" />
    </div>
    
      
  );
}

export default App;
