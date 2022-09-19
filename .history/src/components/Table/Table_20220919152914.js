import React from 'react';
import { useState } from 'react';

export default function Table() {
  const [worker, setWorker] = useState({ firstName: '', lastName: '' });
  const handleAdd = (event) => {
    event.preventDefault();
  };

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>Pracownicy</tr>
        </thead>
        <tbody>
          <td>{/* worker.firstName */}</td>
          <td>{/* worker.lastName */}</td>
        </tbody>
      </table>
      <input type='text' name='First Name' required='required'></input>
      <input input type='text' name='Last Name' required='required'></input>
      <button>ADD</button>
      <button>DELETE</button>
    </div>
  );
}
