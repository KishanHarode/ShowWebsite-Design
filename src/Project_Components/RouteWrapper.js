import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import {Home} from './Home'; 
import MyCollection from './My_Collection';
import {Contact} from './Contact';
import Mens from './Mens';
import Womens from './Womens';
import DetailSectionShoe from './DetailSectionShoe';
const RouteWrapper = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Men" element={<Mens/>}/>
        <Route path="/Women" element={<Womens/>}/>
        <Route path="/Collection" element={<MyCollection/>}/>
        <Route path="/Contact_Us" element={<Contact/>}/>
        <Route path="/DetailSectionShoe/:id/:gender" element={<DetailSectionShoe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteWrapper;
