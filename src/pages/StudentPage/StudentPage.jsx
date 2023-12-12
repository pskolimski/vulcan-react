import Student from '../../components/Student/Student';
import { StudentsContext } from '../../App';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import styles from './StudentPage.module.scss';
import Grades from '../../components/Grades/Grades';
import Pagination from '../../components/Pagination/Pagination';
import Helmet from 'react-helmet';

const StudentPage = () => {
   const { students } = useContext(StudentsContext);
   const params = useParams();
   const [activeStudent, setActiveStudent] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      const activeStudent = students.find(
         (student) => student.username === params.username,
      );

      if (!activeStudent) {
         navigate('/404');
      }

      setActiveStudent(activeStudent);
   }, [navigate, params, students]);

   if (activeStudent)
      return (
         <>
            <Helmet>
               <title>
                  {activeStudent.firstName} {activeStudent.lastName} - Vulcan
                  3.0
               </title>
            </Helmet>
            <PageTemplate>
               <div className={styles.wrapper}>
                  <div>
                     <h2 className={styles.title}>
                        Profil ucznia {activeStudent.firstName}{' '}
                        {activeStudent.lastName}
                     </h2>
                     <p className={styles.subtitle}>
                        Uczeń o numerze PESEL {activeStudent.pesel}
                     </p>

                     <Student student={activeStudent} />
                     <Grades
                        grades={activeStudent.grades}
                        pesel={activeStudent.pesel}
                     />
                  </div>
                  <Pagination activeStudent={activeStudent} />
               </div>
            </PageTemplate>
         </>
      );
};

export default StudentPage;
