import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'
function App() {
  const api = "http://127.0.0.1:8000/";
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    Axios.get(`${api}/users/role_user/6/`)
    .then(res =>setUsers(res.data)
    )
},[]);

  return (
    <div className="App">
      
        <p>
          Edit and save to reload.
        </p>
       
    </div>
  );
}

export default App;
