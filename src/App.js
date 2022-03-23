import './App.css';
// import ReactDOM from "react-dom";
import {Routes, Route } from 'react-router-dom';
import Posts from './Components/Posts';
import Comments from './Components/Comments';
import Album from './Components/Album';
import Photos from './Components/Photos';
import Todos from './Components/Todos';
import Users from './Components/Users';
import Navigation from './Components/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        {/* <Route  exact path='/' element={<Navigation/>}/> */}
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/comments' element={<Comments/>}/>
        <Route path='/album' element={<Album/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
 </div>
    
  );
}

export default App;
