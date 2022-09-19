import React from 'react';
import { useState } from 'react';

export default function Table() {
  const [worker, setWorker] = useState();
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>Pracownicy</tr>
        </thead>
        <tbody>
          <td>{worker.firstName}</td>
          <td>{worker.lastName}</td>
        </tbody>
      </table>
      <input type='text'></input>
      <input input type='text'></input>
      <button></button>
      <button></button>
    </div>
  );
}
