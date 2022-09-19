import React from 'react';
import Sidebar from '../Sidebar/Sidebar.js';
import './body.scss';
export default function Body() {
  return (
    <div className='body'>
      <Sidebar className='sidebar-left'></Sidebar>
      <Sidebar className='sidebar-right'></Sidebar>
    </div>
  );
}
