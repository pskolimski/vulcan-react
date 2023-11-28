import React, { useState } from 'react';
import studentsList from 'data/students.json';
import Home from 'pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
]);

export const StudentsContext = React.createContext();

const App = () => {
   const [students, setStudents] = useState(studentsList);

   return (
      <StudentsContext.Provider value={{ students, setStudents }}>
         <RouterProvider router={router}></RouterProvider>
      </StudentsContext.Provider>
   );
};

export default App;
