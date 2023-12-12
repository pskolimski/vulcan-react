import React from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';

const NotFound = () => {
   return (
      <PageTemplate>
         <h1>Nie znaleziono strony</h1>
         <p>Przepraszamy, ale nie znaleziono strony o podanym adresie.</p>
      </PageTemplate>
   );
};

export default NotFound;
