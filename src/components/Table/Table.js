import React from 'react';
import { useState } from 'react';

export default function Table() {
  const [workers, setWorkers] = useState(new Array(5));
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
    const newWorkers = [...workers, newWorker];
    setWorkers(newWorkers);
  };

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>Pracownicy</tr>
          <tr></tr>
        </thead>
        <tbody>
          <td>{workers.firstName}</td>
          <td>{workers.lastName}</td>
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstName'
          placeholder='first name'
          onChange={handleAdd}
        ></input>
        <input
          input
          type='text'
          name='lastName'
          placeholder='last name'
          onChange={handleAdd}
        ></input>
        <button>ADD</button>
        <button>DELETE</button>
      </form>
    </div>
  );
}
