import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'
import {useParams} from "react-router-dom"

function Posts() {
  const [user, setUser] = useState([]);
  const [post,setPost]=useState([]);
  const [comment,setComment] = useState([]);
  const [todo,setTodo]=useState([]);
  const [album,setAlbum] = useState([]);
  const [photo,setPhoto] = useState([]);

  const params= useParams();
  console.log(params.params);

  useEffect(() => {  
    axios
      .get(`https://jsonplaceholder.typicode.com/${params.params}`)
      .then((res) => {
        console.log(res.data);
    
        if(params.params=='posts'){
          setPost(res.data);
        }
        else if (params.params=='users'){
          setUser(res.data)
        }
        else if (params.params=='comments'){
          setComment(res.data)
        }
        else if (params.params=='todos'){
          setTodo(res.data)
        }
        else if (params.params=='albums'){
          setAlbum(res.data)
        }
        else if (params.params=='photos'){
          setPhoto(res.data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  
function Post(){
  return (
    <div>
      <h2>Post Page</h2>
      <div className="todo_data">
      <table>
        <tbody>
         <tr>
         <th>S.no</th>
         <th>Title</th>
         <th>Description</th>
    </tr>
        {post.map((i) => (
           <tr>
             <td key={i.id} >{i.id}.</td>
          <td key={i.id}>{i.title}</td>
          <td key={i.id}>{i.body}</td>
         </tr>
        ))}
        </tbody>
</table>
      </div>
    </div>
  );
}

function User(){
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

function Comment(){
  return (
    <div>
        <h2>Comment Page</h2>
     <div className="todo_data">
     <table>
       <tbody>
         <tr>
         <th>S.no</th>
         <th>Name</th>
         <th>Email</th>
         <th>Comments</th>
    </tr>
        {comment.map((i) => (
            <tr>
              <td key={i.id}>{i.id}.</td>
        <td><p key={i.id}> {i.name}</p></td>  
         <td><p key={i.id}> {i.email}</p></td> 
         <td><p key={i.id}>{i.body}</p></td> 
         </tr>
        ))}
        </tbody>
</table>
      </div>
    </div>
  )
}

function Todo(){

  return (
    <div>
       <h2>Todo Page</h2>
    
      <div className="todo_data">
      <table>
        <tbody>
         <tr>
         <th>S.no</th>
         <th>Title</th>
         <th>Status</th>
    </tr>
        {todo.map((i) => (
            <tr>
              <td key={i.id}>{i.id}.</td>
          <td key={i.id}> {i.title}</td>
          <td key={i.id}> {i.completed ? "True": "False"}</td>
         </tr>
        ))}
        </tbody>
</table>
      </div>
    </div>
  )
}
  function Album(){
    return (
      <div>
        <h2>Album Page</h2>
        <div className="post_data">
          {album.map((i) => (
              <div className="post_dataItem">
            <p key={i.id}><b>Title:</b> {i.title}</p>
           </div>
          ))}
  
        </div>
  
      </div>
    )
  }
function Photo(){
  return (
    <div>
        <h2>Photo Page</h2>
  
        <div className="todo_data">
        <table>
          <tbody>
         <tr>
         <th>S.no</th>
         <th>Title</th>
         <th>Image</th>
    </tr>
        {photo.map((i) => (
           <tr>
             <td key={i.id}>{i.id}.</td>
          <td><p key={i.id}> {i.title}</p></td>
         <td><img key={i.id} src={i.url}/></td>
         </tr>
        ))}
        </tbody>
</table>
 </div>
    </div>
  )
}

if (params.params == "posts") {
  return <Post></Post>;
} else if (params.params == "comments") {
  return <Comment></Comment>;
} else if (params.params == "todos") {
  return <Todo></Todo>;
} else if (params.params == "users") {
  return <User></User>;
} else if (params.params == "albums") {
  return <Album></Album>;
} else if (params.params == "photos") {
  return <Photo></Photo>;
}

}

export default Posts;
