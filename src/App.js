import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';
import ViewTask from './pages/ViewTask';

function App(){
  return(
    <Router>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/save" element={<CreateTask/>}/>
        <Route path= "/:id" element={<ViewTask/>}/>
        <Route path= "/edit/:id" element={<UpdateTask/>}/>
      </Routes>
    </Router>
  )
}

export default App;
