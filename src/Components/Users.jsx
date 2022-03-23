import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
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
       <h2>Users Page</h2>
      <div className="post_data">
        {user.map((i) => (
            <div className="post_dataItem">
          <h5 key={i.id}><i>Name:</i> {i.name}</h5>
          <p key={i.id}><i>Username:</i> {i.username}</p>
          <p key={i.id}><i>Email:</i> {i.email}</p>
          <p key={i.id}><i>City:</i> {i.address.city}</p>
          <p key={i.id}><i>Phone:</i> {i.phone}</p> 
          <p key={i.id}><i>Website:</i> {i.website}</p>
         </div>
        ))}

      </div>   
    </div>
  )
}

export default User