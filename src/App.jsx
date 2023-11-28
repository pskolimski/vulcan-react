import React, { useState } from 'react';
import studentsList from 'data/students.json';
import Sidebar from 'components/Sidebar/Sidebar';

const App = () => {
   const [students] = useState(studentsList);

   return (
      <>
         <Sidebar students={students} />
      </>
   );
};

export default App;
