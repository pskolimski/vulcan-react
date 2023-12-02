import React from 'react';
import styles from './Grades.module.scss';

const Grades = ({ grades }) => {
   return (
      <div>
         <h3 className={styles.title}>Oceny</h3>

         <div className={styles.grades}>
            {grades.map((grade, index) => (
               <div key={index} className={styles.grade}>
                  {grade}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Grades;
