import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function Todos() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
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
       <h2>Todo Page</h2>
    
      <div className="todo_data">
      <table>
         <tr>
         <th>S.no</th>
         <th>Title</th>
         <th>Status</th>
    </tr>
        {user.map((i) => (
            <tr>
              <td key={i.id}>{i.id}.</td>
          <td key={i.id}> {i.title}</td>
          <td key={i.id}> {i.completed ? "True": "False"}</td>
         </tr>
        ))}
</table>
      </div>
    </div>
  )
}

export default Todos