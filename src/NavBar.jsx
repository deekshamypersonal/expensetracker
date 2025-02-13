import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-purple-700 font-semibold hover:text-purple-900">Home</Link>
          <Link to="/view-expense" className="text-purple-700 font-semibold hover:text-purple-900">View Expense</Link>
          <Link to="/budget" className="text-purple-700 font-semibold hover:text-purple-900">Budget</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={handleLogout} 
            className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-200"
          >
            Logout
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/dashboard" className="block text-purple-700 font-semibold py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/view-expense" className="block text-purple-700 font-semibold py-2" onClick={toggleMenu}>View Expense</Link>
          <Link to="/budget" className="block text-purple-700 font-semibold py-2" onClick={toggleMenu}>Budget</Link>
          <button 
            onClick={() => { handleLogout(); toggleMenu(); }} 
            className="block w-full text-left bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

