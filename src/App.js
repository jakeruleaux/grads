import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import SideBar from './SideBar';

import PageRoutes from './routes/PageRoutes';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <PageRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
