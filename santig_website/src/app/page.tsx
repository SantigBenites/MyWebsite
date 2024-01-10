'use client';
import Image from 'next/image'
import React, {useState} from 'react';
import ReactDOM from "react-dom"; 
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
// Pages
import Page1_content from '@/pages/page1';
import { Home_page } from '@/pages/home';

// Components
import Navbar from '@/components/navbar'; 



export default function Home()  {
  return (
    <div>
      
      <Router>
        <Routes>         
          <Route path="/" element={<Home_page />}>                  
          <Route path="/page1" element={<Page1_content />} />                        
        </Route>       
        </Routes>     
      </Router>
    </div>
  )
}
