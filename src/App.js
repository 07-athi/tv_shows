import './index.css';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ViewDetails from "./components/ViewDetails";
import { useState } from "react";
import Navbar from './components/Navbar';


function App() {
  const [id,setId] = useState(null);
  return (
  <div className="bg-gradient-to-tr from-blue-900 to-black shadow w-full h-full overflow-hidden">
    <div className='w-full h-full overflow-y-hidden'>
    <Router>
      <div><Navbar/></div>
      <Routes>
        <Route path="/" element={<Home setId={setId}/>} />
        <Route path="/details/:id" element={<ViewDetails/>} />
      </Routes>
    </Router>
    </div>
    
  </div>
  );
}

export default App;