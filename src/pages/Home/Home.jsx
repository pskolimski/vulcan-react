import React, { useContext } from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import { StudentsContext } from '../../App';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
   const { students } = useContext(StudentsContext);

   return (
      <PageTemplate>
         <h1>Strona Główna</h1>

         <div className={styles.students}>
            {students.map((student) => (
               <NavLink
                  to={`/student/${student.username}`}
                  key={student.pesel}
                  className={styles.student}
               >
                  <img
                     src={student.image}
                     alt={`${student.firstName} ${student.lastName}`}
                     className={styles.image}
                  />
                  {student.firstName} {student.lastName}
               </NavLink>
            ))}
         </div>
      </PageTemplate>
   );
};

export default Home;
