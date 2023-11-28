import React, { useState } from 'react';
import studentsList from 'data/students.json';

const App = () => {
   const [students] = useState(studentsList);

   return (
      <>
         <h1>Hello world</h1>
      </>
   );
};

export default App;
