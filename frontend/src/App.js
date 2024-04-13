import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom'

import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Toaster />
      <Routes>
        <Route path='/' element={authUser ? (<HomePage />) : (<Navigate to={'/login'} />)} />
        <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <LoginPage />} />
        <Route path='/signup' element={authUser ? (<Navigate to={'/login'} />) : (<SignupPage />)} />

      </Routes>
    </div>
  );
}

export default App;
