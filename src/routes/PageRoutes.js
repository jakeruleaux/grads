import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const PageRoutes = () => {
    return(
    <Routes>
      <Route exact path="/page1" element={<Page1/>}/>
      <Route exact path="/page2" element={<Page2 />}/>
      <Route exact path="/page3" element={<Page3 />}/> 
    </Routes>
    );
};

export default PageRoutes;