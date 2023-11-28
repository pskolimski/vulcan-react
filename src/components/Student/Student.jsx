import React from 'react';

const Student = ({ student }) => {
   return (
      <div>
         <img
            src={student.image}
            alt={`${student.firstName} ${student.lastName}`}
         />
         <p>
            {student.firstName} {student.lastName}
         </p>
         <p>Klasa {student.class}</p>
         <p>Data urodzenia: {student.dateOfBirth}</p>
      </div>
   );
};

export default Student;
