import React from 'react';
import logo from 'assets/logo.svg';

const Sidebar = ({ students }) => {
   return (
      <div>
         <img src={logo} alt="Logo" />

         <div>
            {students.map((student, index) => (
               <div key={index}>
                  <p>
                     {student.firstName} {student.lastName}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
