import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function Comments() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
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
        <h2>Comment Page</h2>
     <div className="todo_data">
     <table>
         <tr>
         <th>S.no</th>
         <th>Name</th>
         <th>Email</th>
         <th>Comments</th>
    </tr>
        {user.map((i) => (
            <tr>
              <td key={i.id}>{i.id}.</td>
        <td><p key={i.id}> {i.name}</p></td>  
         <td><p key={i.id}> {i.email}</p></td> 
         <td><p key={i.id}>{i.body}</p></td> 
         </tr>
        ))}
</table>
      </div>
    </div>
  )
}

export default Comments