import React from 'react';
import { useState } from 'react';

export default function Table() {
  const [worker, setWorker] = useState(data);
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>Pracownicy</tr>
        </thead>
      </table>
    </div>
  );
}
