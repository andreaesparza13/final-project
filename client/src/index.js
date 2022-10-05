import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
// import ErrorPage from './ErrorPage';
// import Roster from './components/Roster';
// import SectionAssignments from './components/SectionAssignments';

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "roster/:section_id",
//         element: <Roster />
//       },
//       {
//         path: "assignments/:section_id",
//         element: <SectionAssignments />
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
