import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function Photos() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
        <h2>Photo Page</h2>
  
        <div className="todo_data">
        <table>
         <tr>
         <th>S.no</th>
         <th>Title</th>
         <th>Image</th>
    </tr>
        {user.map((i) => (
           <tr>
             <td key={i.id}>{i.id}.</td>
          <td><p key={i.id}> {i.title}</p></td>
         <td><img key={i.id} src={i.url}/></td>
         </tr>
        ))}
</table>
 </div>
    </div>
  )
}

export default Photos