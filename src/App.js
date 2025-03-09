import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import RecoverPassword from './pages/RecoverPassword';
import ResetPassword from './pages/ResetPassword';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import { routes } from './contant';
import CreateAccount from './pages/CreateAccount';
import FAQs from './components/FAQs';
import SOPsPage from './pages/SOPsPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import {
  BounceLoader,
} from 'react-spinners';
import AdminDashboard from './pages/dashboard/AdminDashboard';


// Public Route Component
const PublicRoute = ({ isAuthenticated, children }) => {
  const token = getToken();
  return token ? <Navigate to='/' /> : children;
};

// Private Route Component
const PrivateRoute = ({ isAuthenticated, children }) => {
  const token = getToken();
  return token ? children : <Navigate to='/signin' />;
};

// Verification Component
const Verify = ({ isAuthenticated }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode');

  useEffect(() => {
    if (mode === 'verifyEmail') {
      // Navigate to Account page
      navigate(routes.account);
    } else if (mode === 'resetPassword') {
      // Navigate to Reset Password page
      navigate(routes.resetPassword);
    } else {
      // Handle unsupported modes
      console.error('Unsupported mode:', mode);
    }
  }, [mode, navigate]);

  return <div>Processing your request...</div>;
};

const getToken = () => {
  const token = localStorage.getItem('token');
  return !!token;
};
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <BounceLoader />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path={routes.main}
          element={<HomePage />}
        />
        <Route
          path={routes.aboutUs}
          element={<AboutUs />}
        />
        <Route
          path={routes.adminDashboard}
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.Faqs}
          element={<FAQs />}
        />
        <Route
          path={routes.SOPs}
          element={<SOPsPage />}
        />
        <Route
          path={routes.TermsConditions}
          element={<TermsAndConditions />}
        />
        <Route
          path={routes.PrivacyPolicy}
          element={<PrivacyPolicy />}
        />

        <Route
          path={routes.profile}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.signup}
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path={routes.signin}
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path={routes.recoverPassword}
          element={<RecoverPassword />}
        />
        <Route
          path={routes.resetPassword}
          element={<ResetPassword />}
        />
        <Route
          path='/verify'
          element={<Verify />}
        />
        <Route
          path='/'
          element={<Navigate to={routes.main} />}
        />
        <Route
          path='/created'
          element={<CreateAccount />}
        />
      </Routes>
    </Router>
  );
}

export default App;