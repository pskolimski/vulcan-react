import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from 'pages/Home/Home';
import StudentPage from 'pages/StudentPage/StudentPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { saveLocalStorage } from './hooks/saveLocalStorage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
   {
      path: '/student/:pesel',
      element: <StudentPage />,
   },
]);

export const StudentsContext = React.createContext();

const App = () => {
   const [students, setStudents] = useState(useLocalStorage());

   useEffect(() => {
      saveLocalStorage(students);
   }, [students]);

   return (
      <StudentsContext.Provider value={{ students, setStudents }}>
         <RouterProvider router={router}></RouterProvider>
      </StudentsContext.Provider>
   );
};

export default App;
