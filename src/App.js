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
import LMS from './pages/LMS';
import CoursePage from './pages/coursesPage';
import { routes } from './contant';
import SupportPage from './pages/Support';
import RequestList from './components/RequestList';
import Event1 from './pages/Event1';
import Events2 from './pages/Events2';
import Event3 from './pages/Event3';
import Event4 from './pages/Event4';
import InternshipSection from './pages/Internship';
import ScholarshipProgram from './pages/Scholarship';
import CreateAccount from './pages/CreateAccount';
import RegisterCourse from './pages/RegisterCourse';
import SetupStudentsLMS from './pages/SetupStudentsLMS';
import NewsForYou from './pages/NewsForYou';
import UserDashboard from './pages/UserDashboard';
import CourseDetail from './pages/CoursesDetail';
import { Layout } from 'lucide-react';
import CourseCart from './pages/CourseeCart';
import FAQs from './components/FAQs';
import SOPsPage from './pages/SOPsPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LaptopScheme from './pages/LaptopScheme';
import SolarScheme from './pages/SolarScheme';
import {
  ClipLoader,
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
} from 'react-spinners';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import CertificatePage from './pages/CertificatePage';
import CourseVideo from './pages/course-video';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setTimeout(() => {
      setLoading(false);
    }, [500]);
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
          path={routes.support}
          element={<SupportPage />}
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
          path={routes.dashboard}
          element={<UserDashboard />}
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
          path={routes.LaptopScheme}
          element={<LaptopScheme />}
        />
        <Route
          path={routes.SolarScheme}
          element={<SolarScheme />}
        />
        <Route
          path={routes.CertificatePage}
          element={<CertificatePage />}
        />

        <Route
          path='/event-1'
          element={
            <PrivateRoute>
              <Event1 />
            </PrivateRoute>
          }
        />

        <Route
          path='/course-videos'
          element={
            <PrivateRoute>
              <CourseVideo />
            </PrivateRoute>
          }
        />

        <Route
          path='/event-2'
          element={
            <PrivateRoute>
              <Events2 />
            </PrivateRoute>
          }
        />
        <Route
          path='/event-3'
          element={
            <PrivateRoute>
              <Event3 />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.course}
          element={
            <PrivateRoute>
              <CoursePage />
            </PrivateRoute>
          }
        />
        <Route
          path='/event-4'
          element={
            <PrivateRoute>
              <Event4 />
            </PrivateRoute>
          }
        />

        <Route
          path='/request-list'
          element={
            <PrivateRoute>
              <RequestList />
            </PrivateRoute>
          }
        />

        <Route
          path={routes.lms}
          element={
            <PrivateRoute>
              <LMS />
            </PrivateRoute>
          }
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
          path={routes.courseDetail}
          element={<CourseDetail />}
        />
        <Route
          path={routes.internship}
          element={<InternshipSection />}
        />

        <Route
          path={routes.scholarship}
          element={<ScholarshipProgram />}
        />
        <Route
          path={routes.howtocreateaccount}
          element={<ScholarshipProgram />}
        />
        <Route
          path='/next-page'
          element={<CourseCart />}
        />
        <Route
          path='/created'
          element={<CreateAccount />}
        />
        <Route
          path='/register-course'
          element={<RegisterCourse />}
        />
        <Route
          path='/setup-lms'
          element={<SetupStudentsLMS />}
        />
        <Route
          path='/news'
          element={<NewsForYou />}
        />
      </Routes>
    </Router>
  );
}

export default App;
