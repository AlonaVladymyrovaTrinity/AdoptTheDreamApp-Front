import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/layout/Header/Header';
import About from './component/layout/About/About';
import Home from './component/Home/Home';
import PetDetails from './component/Pet/PetDetails';
import Pets from './component/Pet/Pets';
import Contact from './component/layout/Contact/Contact';
import Profile from './component/User/Profile';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import LoginSignUp from './component/User/LoginSignUp';
import FavoritePets from './component/Adoption/FavoritePets';
import ConfirmApplication from './component/Adoption/ConfirmApplication';
import NotFound from './component/layout/NotFound/NotFound';
import Footer from './component/layout/Footer/Footer';
import Donate from './component/Donate/Donate';
// import DonateProcess from './component/Donate/DonateProcess';
import DonationSuccess from './component/layout/DonationSuccess/DonationSuccess';
import OurTeam from './component/layout/OurTeam/OurTeam';
import style from './App.module.css';
import AuthContext from './context/auth-context';

function ProtectedRoute({ isAuthenticated, children }) {
  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const { userId } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(userId ? true : false);

  useEffect(() => {
    setIsAuthenticated(userId ? true : false);
  }, [userId]);

  // Function to handle user login
  const handleLogin = () => {
    // authentication logic will be implemented later
    setIsAuthenticated(true);
  };
  // Function to handle user logout
  const handleLogout = () => {
    // authentication logic will be implemented later
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header />
      <main className={style['app-body']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/pets" element={<Pets showFilters={true} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/me/update"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/password/update"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UpdatePassword />
              </ProtectedRoute>
            }
          />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset" element={<ResetPassword />} />
          <Route
            path="/login"
            element={<LoginSignUp onLogin={handleLogin} />}
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <FavoritePets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/process/donate"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Donate />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/process/donate"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DonateProcess />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/donation/success"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DonationSuccess />
              </ProtectedRoute>
            }
          />

          <Route
            path="/application/confirm"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ConfirmApplication />
              </ProtectedRoute>
            }
          />
      <Route path="/team" element={<OurTeam />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
