import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';
import { getProfile } from '../redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';
import CourseCart from '../pages/CourseeCart';
import { ToastContainer } from 'react-toastify';
import PaidCourse from './PaidCourse';
import { getMyAddToCartCourse, getMyPaidCourse } from '../redux/action/request';

const LMS = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [assignmentFile, setAssignmentFile] = useState(null);
  const { paidCourse } = useSelector((state) => state.auth);
  const { addToCartCourse } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMyAddToCartCourse('AddToCart'));
    dispatch(getMyPaidCourse());
  }, [dispatch]);

  const assignments = [
    { id: 1, title: 'React Project', dueDate: '2025-01-15' },
    { id: 2, title: 'JavaScript Quiz', dueDate: '2025-01-18' },
  ];

  const quizzes = [
    {
      id: 1,
      title: 'React Quiz 1',
      questions: [
        {
          id: 1,
          question: 'What is React?',
          options: ['Library', 'Framework', 'Language'],
          answer: 'Library',
        },
        {
          id: 2,
          question: 'What does JSX stand for?',
          options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript X'],
          answer: 'JavaScript XML',
        },
      ],
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      questions: [
        {
          id: 1,
          question: 'What is a closure?',
          options: [
            'A type of function',
            'A function inside another function',
            'A variable scope',
          ],
          answer: 'A function inside another function',
        },
      ],
    },
  ];

  const grades = [
    { id: 1, course: 'React for Beginners', grade: 'A+' },
    { id: 2, course: 'Advanced JavaScript', grade: 'A' },
  ];

  const handleQuizAnswer = (questionId, selectedOption) => {
    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleQuizSubmit = (quizId) => {
    const quiz = quizzes.find((q) => q.id === quizId);
    const score = quiz.questions.reduce((acc, question) => {
      if (quizAnswers[question.id] === question.answer) acc++;
      return acc;
    }, 0);
    setQuizResults({ score, total: quiz.questions.length });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAssignmentFile(file);
  };

  const handleSubmitAssignment = () => {
    if (assignmentFile) {
      alert('Assignment submitted successfully!');
    } else {
      alert('Please select an assignment file before submitting.');
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome to Your Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add to Cart Card */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700">
                  🛒 Courses in Cart
                </h3>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {addToCartCourse.length}
                </p>
              </div>

              {/* Paid Course Card */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700">
                  💰 Paid Courses
                </h3>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {paidCourse.length}
                </p>
              </div>
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Paid Courses
            </h2>
            <PaidCourse />
          </div>
        );
      case 'assignments':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Assignments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {assignment.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Due Date: {assignment.dueDate}
                  </p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="mt-4 w-full p-2 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={handleSubmitAssignment}
                    className="mt-4 w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
                  >
                    Submit Assignment
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'AddToCart':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Add To Cart Course
            </h2>
            <CourseCart />
          </div>
        );
      case 'grades':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Grades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {grades.map((grade) => (
                <div
                  key={grade.id}
                  className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {grade.course}
                  </h3>
                  <p className="text-gray-600">Grade: {grade.grade}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Profile
            </h2>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-700">Name: {profile?.name}</p>
              <p className="text-gray-700">Email: {profile?.email}</p>
              <p className="text-gray-700">CNIC: {profile?.CNIC}</p>
              <p className="text-gray-700">Address: {profile?.address}</p>
              <p className="text-gray-700">Phone: {profile?.phone}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        {/* Sidebar (Top on Mobile, Left on Desktop) */}
        <div className="w-full lg:w-64 bg-white shadow-md p-6 overflow-y-auto lg:overflow-visible scrollbar-hide">
          <h2 className="text-xl font-bold text-gray-800 mb-6 hidden lg:block">
            LMS Menu
          </h2>
          <nav className="lg:space-y-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide">
            <button
              onClick={() => setSelectedSection('dashboard')}
              className="lg:w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 p-2 rounded-md transition-all whitespace-nowrap"
            >
              🏠 Dashboard
            </button>
            <button
              onClick={() => setSelectedSection('AddToCart')}
              className="lg:w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 p-2 rounded-md transition-all whitespace-nowrap"
            >
              🛒 Add To Cart
            </button>
            <button
              onClick={() => setSelectedSection('courses')}
              className="lg:w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 p-2 rounded-md transition-all whitespace-nowrap"
            >
              📚 Courses
            </button>
            <button
              onClick={() => setSelectedSection('assignments')}
              className="lg:w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 p-2 rounded-md transition-all whitespace-nowrap"
            >
              📝 Assignments
            </button>
            <button
              onClick={() => setSelectedSection('grades')}
              className="lg:w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 p-2 rounded-md transition-all whitespace-nowrap"
            >
              📊 Grades
            </button>
            <button
              onClick={() => setSelectedSection('profile')}
              className="lg:w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 p-2 rounded-md transition-all whitespace-nowrap"
            >
              👤 Profile
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LMS;