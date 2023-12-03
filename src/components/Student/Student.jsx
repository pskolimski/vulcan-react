import React from 'react';
import styles from './Student.module.scss';

const Student = ({ student }) => {
   const getAverage = (grades) => {
      const sum = grades.reduce((acc, grade) => {
         return acc + grade;
      }, 0);

      return (sum / grades.length).toFixed(2);
   };

   return (
      <div className={styles.wrapper}>
         <img
            src={student.image}
            alt={`${student.firstName} ${student.lastName}`}
            className={styles.image}
         />
         <div className={styles.info}>
            <p className={styles.name}>
               {student.firstName} {student.lastName}
            </p>
            <p className={styles.class}>Klasa {student.class}</p>
            <p className={styles.field}>
               <span>Data urodzenia: </span>
               {student.birthdate}
            </p>
            <p className={styles.field}>
               <span>Semestr: </span>
               {student.semester}
            </p>
            <p className={styles.field}>
               <span>PESEL: </span>
               {student.pesel}
            </p>
            <p className={styles.field}>
               <span>Średnia ocen: </span>
               {student.grades.length === 0
                  ? 'Brak ocen'
                  : getAverage(student.grades)}
            </p>
         </div>
      </div>
   );
};

export default Student;
