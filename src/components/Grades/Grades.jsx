import React, { useContext } from 'react';
import styles from './Grades.module.scss';
import { StudentsContext } from '../../App';

const Grades = ({ grades, pesel }) => {
   const { students, setStudents } = useContext(StudentsContext);

   const addGrade = () => {
      const newGrade = prompt('Podaj ocenę');
      if (newGrade > 0 && newGrade < 7) {
         const updatedStudents = [...students];
         const studentIndex = updatedStudents.findIndex(
            (student) => student.pesel === pesel,
         );
         if (studentIndex !== -1) {
            updatedStudents[studentIndex].grades.push(parseInt(newGrade));
            setStudents(updatedStudents);
         }
      } else {
         alert('Ocena musi być liczbą od 1 do 6');
      }
   };

   const deleteGrade = (index) => {
      const updatedStudents = [...students];
      const studentIndex = updatedStudents.findIndex(
         (student) => student.pesel === pesel,
      );
      if (studentIndex !== -1) {
         updatedStudents[studentIndex].grades.splice(index, 1);
         setStudents(updatedStudents);
      }
   };

   return (
      <div>
         <h3 className={styles.title}>Oceny</h3>
         <p className={styles.subtitle}>Kliknij aby usunąć</p>

         <div className={styles.grades}>
            {grades.length === 0 && <p>Brak ocen</p>}
            {grades.map((grade, index) => (
               <div
                  key={index}
                  className={styles.grade}
                  onClick={() => deleteGrade(index)}
               >
                  {grade}
               </div>
            ))}
         </div>

         <button onClick={addGrade} className={styles.button}>
            Dodaj ocenę
         </button>
      </div>
   );
};

export default Grades;
