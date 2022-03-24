import './App.css';
import {Routes, Route } from 'react-router-dom';
import Posts from './Components/Posts';
import Navigation from './Components/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Routes>
       
        <Route path='/:params' element={<Posts/>}/>
        
      </Routes>
 </div>
    
  );
}

export default App;
