import { useEffect, useState } from 'react';
import './App.css';
import BlogList from './Components/BlogList';
import axios from "axios";
function App() {

  const[title,setTitle]=useState([]);
  const[name,setName]=useState("karthik");

  function update(e){
    console.log("karthik inside submit")
    var url='http://localhost:8080/user/'+e.target.value
    axios.get(url).then(data=>setTitle(data.data)).catch(error => console.log("inside error",error));
    setName("rohith")
  }

   return (
     
      title.length>0 ? Object.values(title).map(input=>{
        return <div>

        <div class="card">
        <h5 class="card-header">Movie name -{input.moviename}</h5>
        <div class="card-body">
          <h5 class="card-title">description - {input.movieDesc}</h5>
          <p class="card-text">Rating - {input.movieRating}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        
      }):<div>
        <br />
        <br />
        <button type="button" class="btn btn-primary" onClick={update} value="0">user 0</button>
        <br/>
        <br />
        <button type="button" class="btn btn-primary" onClick={update} value="1">user 1</button>
        </div>
   );
}

export default App;
