import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Menu from './menu';
import Error from './Error';
import User from './user'
import MyClass from './ClassComp';
import Example from './Example';


function App() {
  return (
    <>

      <Menu />
      <MyClass />
      <Example text='Random Text' abc='Example Text' />
      <Routes>
      <Route path='/about' Component={About}></Route>
      {/* <Route path='/contact' Component={()=>{<Contact/>}}></Route> */}
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' Component={Error} />
      <Route path='/user/:fname/:lname' Component={User} />
      </Routes>
    </>
  );
}

export default App;
