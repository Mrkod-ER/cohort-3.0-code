import './App.css';
import { useEffect, useState, useRef } from 'react';


// more element way when we will use useSocket
function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef();
 
  function sendMessage() {
    if(!socket) {
      return; 
    }

    const message = inputRef.current.value; 
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
      }
    }, []);

  return <div className="flex items-center justify-center">
        <input ref={inputRef} type="text" placeholder='Message....'></input>
        <button onClick={sendMessage}>Send</button>
      </div>
}

export default App
