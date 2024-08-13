import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstForm } from './components/forms';
import Hello from './components/message';
import { GetUsers } from './components/getusers/Getusers';

function App() {
  return (
    <>
    {/*<FirstForm></FirstForm>
    <Hello></Hello>
    <GetUsers></GetUsers> 
    <Getbyaxios></Getbyaxios>
    */}
    <GetUsers></GetUsers>
    </>
  );
}

export default App;
