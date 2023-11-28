import { StudentsContext } from 'App';
import Sidebar from 'components/Sidebar/Sidebar';
import React, { useContext } from 'react';

const PageTemplate = ({ children }) => {
   const { students } = useContext(StudentsContext);

   return (
      <div>
         <Sidebar students={students} />
         {children}
      </div>
   );
};

export default PageTemplate;
