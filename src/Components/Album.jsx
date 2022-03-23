import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function Album() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
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
      <h2>Album Page</h2>
      <div className="post_data">
        {user.map((i) => (
            <div className="post_dataItem">
          <p key={i.id}><b>Title:</b> {i.title}</p>
         </div>
        ))}

      </div>

    </div>
  )
}

export default Album