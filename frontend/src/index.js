import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button';
import Hello from './components/hello'
import InName from './components/inName';

ReactDOM.render(
  
  <div className=' flex flex-col flex-auto justify-center items-center bg-black h-screen'>
  <div className=" hover:border-2 border-amber-900 bg-red-100 bg-opacity-10 p-20">
    <Hello></Hello>
    <InName></InName>
    <Button></Button>
  </div>
  </div>,
  document.getElementById('root')
);

