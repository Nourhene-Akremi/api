import './style/App.css';
import Axios from 'axios'
import { useEffect, useState} from 'react'
import ListUsers from './listUsers ' 
function App() {
  const [users,setUsers]=useState([])
 
  const getUser=()=>{
      Axios.get('https://jsonplaceholder.typicode.com/users').then(
      (response)=>
        //  console.log(response)
        setUsers(response.data)
       )}
    useEffect(()=>{getUser()},[])

  return (
    <div className="App">
     <button onClick={getUser}>hi</button>
    <div>{users.map((el,i)=><ListUsers user={el} key={i}/>)}</div> 
    </div>
  );
}
export default App;
