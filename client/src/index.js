import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css'
// import Signup from './components/teacher-stuff/Signup';
// import Login from './components/teacher-stuff/Login';
// import TeacherDashboard from './components/teacher-stuff/TeacherDashboard';
// import Roster from './components/Roster';
// import SectionAssignments from './components/teacher-stuff/SectionAssignments';
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
// import ErrorPage from './ErrorPage';
// import Account from './components/teacher-stuff/Account';
// import StudentDashboard from './components/StudentDashboard';
// import Assignments from './components/student-stuff/Assignments';
// import EditStudentInfo from './components/student-stuff/EditStudentInfo';

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "signup",
//         element: <Signup />
//       },
//       {
//         path: "login",
//         element: <Login />
//       },
//       {
//         path: "teacher",
//         element: <TeacherDashboard />,
//         children: [
//           {
//           path: "roster/:section_id",
//           element: <Roster />
//           },
//           {
//             path: "assignments/:section_id",
//             element: <SectionAssignments />
//           }
//         ]
//       },
//       {
//         path: "account",
//         element: <Account />
//       },
//       {
//         path: "student",
//         element: <StudentDashboard />
//       },
//       {
//         path: "assignments",
//         element: <Assignments />
//       },
//       {
//         path: "edit-info",
//         element: <EditStudentInfo />
//       }
//     ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

reportWebVitals();
