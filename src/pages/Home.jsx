import React, { useContext } from 'react';
import Student from 'components/Student/Student';
import { StudentsContext } from 'App';
import PageTemplate from 'templates/PageTemplate/PageTemplate';

const Home = () => {
   const { students } = useContext(StudentsContext);

   return (
      <PageTemplate>
         <h1>Home</h1>

         <Student student={students[10]} />
      </PageTemplate>
   );
};

export default Home;
