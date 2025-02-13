// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './Signup';
// import Login from './Login';
// import Dashboard from './Dashboard';
// import ViewExpense from './ViewExpense';
// import MainLayout from './MainLayout';
// import Budget from './Budget';
// import './App.css'

// function App() {
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route element={<MainLayout onLogout={handleLogout} />}>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/view-expense" element={<ViewExpense />} />
//             <Route path="/budget" element={<Budget />} />
//           </Route>
//           <Route path="/" element={<Signup />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
//------------------------------------------------------------------

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import ViewExpense from './ViewExpense';
import MainLayout from './MainLayout';
import Budget from './Budget';
import { DataProvider } from './DataContext';
import './App.css';

function App() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <DataProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route element={<MainLayout onLogout={handleLogout} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/view-expense" element={<ViewExpense />} />
              <Route path="/budget" element={<Budget />} />
            </Route>
            <Route path="/" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;

//-----------------------------------





