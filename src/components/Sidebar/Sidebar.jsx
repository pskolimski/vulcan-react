import React from 'react';
import logo from 'assets/logo.svg';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ students }) => {
   return (
      <div className={styles.wrapper}>
         <img src={logo} alt="Logo" className={styles.logo} />

         <div className={styles.students}>
            {students.map((student, index) => (
               <NavLink
                  to={`/student/${student.pesel}`}
                  className={`${styles.item}`}
                  key={index}
               >
                  {student.firstName} {student.lastName}
               </NavLink>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
