import React from 'react';
import logo from 'assets/logo.svg';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ students }) => {
   return (
      <div className={styles.wrapper}>
         <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="logo" className={styles.image} />
         </NavLink>

         <div>
            <h3 className={styles.title}>Lista studentów</h3>
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
      </div>
   );
};

export default Sidebar;
