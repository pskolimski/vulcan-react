import students from 'data/students.json';

export const useLocalStorage = () => {
   const data = localStorage.getItem('students');

   if (!data) {
      localStorage.setItem('students', JSON.stringify(students));

      return students;
   }

   return JSON.parse(data);
};
