import React, { useContext } from 'react';
import { StudentsContext } from 'App';
import Sidebar from 'components/Sidebar/Sidebar';
import styles from './PageTemplate.module.scss';

const PageTemplate = ({ children }) => {
   const { students } = useContext(StudentsContext);

   return (
      <div className={styles.wrapper}>
         <Sidebar students={students} />
         <div className={styles.content}>{children}</div>
      </div>
   );
};

export default PageTemplate;
