export const saveLocalStorage = (students) => {
   localStorage.setItem('students', JSON.stringify(students));
};