import React from 'react';
import { useState } from 'react';

export default function Table() {
  const [addFormData, setAddFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const handleAdd = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newWorker = {
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
    };
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
      <input type='text' onChange={handleAdd}></input>
      <input input type='text' onChange={handleAdd}></input>
      <button>ADD</button>
      <button>DELETE</button>
    </div>
  );
}
