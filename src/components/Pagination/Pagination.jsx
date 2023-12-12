import React, { useContext, useLayoutEffect, useState } from 'react';
import { StudentsContext } from '../../App';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Pagination.module.scss';

const Pagination = ({ activeStudent }) => {
   const { students } = useContext(StudentsContext);
   const navigate = useNavigate();
   const [status, setStatus] = useState('');

   useLayoutEffect(() => {
      if (students.indexOf(activeStudent) === 0) {
         setStatus('first');
      } else if (students.indexOf(activeStudent) === students.length - 1) {
         setStatus('last');
      } else {
         setStatus(null);
      }
   }, [activeStudent]);

   const handlePrevious = () => {
      setStatus(null);
      if (students.indexOf(activeStudent) === 0) {
         setStatus('first');
         return;
      } else {
         navigate(
            `/student/${
               students[students.indexOf(activeStudent) - 1].username
            }`,
         );
      }
   };

   const handleNext = () => {
      setStatus(null);
      if (students.indexOf(activeStudent) === students.length - 1) {
         setStatus('last');
         return;
      } else {
         navigate(
            `/student/${
               students[students.indexOf(activeStudent) + 1].username
            }`,
         );
      }
   };

   return (
      <div className={styles.wrapper}>
         <button
            onClick={handlePrevious}
            disabled={status === 'first' && true}
            className={styles.button}
         >
            &lt;
         </button>

         <div className={styles.pages}>
            {students.map((student, index) => (
               <NavLink
                  key={index}
                  to={`/student/${student.username}`}
                  className={styles.item}
               >
                  {index + 1}
               </NavLink>
            ))}
         </div>

         <button
            onClick={handleNext}
            disabled={status === 'last' && true}
            className={styles.button}
         >
            &gt;
         </button>
      </div>
   );
};

export default Pagination;
