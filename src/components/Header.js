import React, { useEffect, useState } from 'react';
import ProfileIcon from '../assets/icons/profile';
import { routes } from '../contant';
import { LogOut, User, ChevronDown, ChevronUp, Menu, X, FileText, Settings, Mail, Scissors, FileInput, FileOutput, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getProfile } from '../redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate(routes.signin);
  };

  const goToUserDashboard = () => {
    navigate(routes.dashboard);
  };

  const gotoHomePage = () => {
    navigate(routes.main);
  };

  const gotoAboutUs = () => {
    navigate(routes.aboutUs);
  };

  const gotoFileUpload = () => {
    navigate(routes.fileUpload);
  };

  const gotoWebScraper = () => {
    navigate(routes.webScraper);
  };

  const gotoComparisonResults = () => {
    navigate(routes.comparisonResults);
  };

  const gotoAdminPanel = () => {
    navigate(routes.adminPanel);
  };

  const gotoSubscriptionManagement = () => {
    navigate(routes.subscriptionManagement);
  };

  const gotoAIGeneratedEmail = () => {
    navigate(routes.aiGeneratedEmail);
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfile());
    }
  }, [dispatch, isAuthenticated]);

  // Toggle dropdown on small screens
  const handleDropdownToggle = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdownName); // Open the dropdown
    }
  };

  return (
    <header
      onMouseLeave={() => setIsOpen(false)}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)', // Modern gradient
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className="flex justify-between items-center py-2 px-4 lg:px-6"
    >
      {/* Logo */}
      <h5 className="text-white text-lg font-bold">AI Comparison Tool</h5>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">
        {/* Home */}
        <button
          onClick={gotoHomePage}
          className="text-white transition-colors duration-300 hover:text-amber-300 focus:outline-none"
        >
          Home
        </button>

        {/* File Upload */}
        <button
          onClick={gotoFileUpload}
          className="text-white transition-colors duration-300 hover:text-amber-300 focus:outline-none"
        >
          Upload CSV
        </button>

        {/* Web Scraper */}
        <button
          onClick={gotoWebScraper}
          className="text-white transition-colors duration-300 hover:text-amber-300 focus:outline-none"
        >
          Web Scraper
        </button>

        {/* Comparison Results */}
        <button
          onClick={gotoComparisonResults}
          className="text-white transition-colors duration-300 hover:text-amber-300 focus:outline-none"
        >
          Comparison Results
        </button>

        {/* Admin Panel */}
        {profile?.role === 'admin' && (
          <button
            onClick={gotoAdminPanel}
            className="text-white transition-colors duration-300 hover:text-amber-300 focus:outline-none"
          >
            Admin Panel
          </button>
        )}

        {/* Subscription Management */}
        {profile?.role === 'admin' && (
          <button
            onClick={gotoSubscriptionManagement}
            className="text-white transition-colors duration-300 hover:text-amber-300 focus:outline-none"
          >
            Subscriptions
          </button>
        )}

        {/* AI-Generated Email */}
        <button
          onClick={gotoAIGeneratedEmail}
          className="text-white transition-colors duration-300 hover:text-amber-300 focus:outline-none"
        >
          AI Email
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white mt-[51px] transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-50 shadow-lg`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {/* Home */}
          <button
            onClick={gotoHomePage}
            className="text-gray-800 transition-colors duration-300 hover:text-amber-500 focus:outline-none text-left"
          >
            Home
          </button>

          {/* File Upload */}
          <button
            onClick={gotoFileUpload}
            className="text-gray-800 transition-colors duration-300 hover:text-amber-500 focus:outline-none text-left"
          >
            Upload CSV
          </button>

          {/* Web Scraper */}
          <button
            onClick={gotoWebScraper}
            className="text-gray-800 transition-colors duration-300 hover:text-amber-500 focus:outline-none text-left"
          >
            Web Scraper
          </button>

          {/* Comparison Results */}
          <button
            onClick={gotoComparisonResults}
            className="text-gray-800 transition-colors duration-300 hover:text-amber-500 focus:outline-none text-left"
          >
            Comparison Results
          </button>

          {/* Admin Panel */}
          {profile?.role === 'admin' && (
            <button
              onClick={gotoAdminPanel}
              className="text-gray-800 transition-colors duration-300 hover:text-amber-500 focus:outline-none text-left"
            >
              Admin Panel
            </button>
          )}

          {/* Subscription Management */}
          {profile?.role === 'admin' && (
            <button
              onClick={gotoSubscriptionManagement}
              className="text-gray-800 transition-colors duration-300 hover:text-amber-500 focus:outline-none text-left"
            >
              Subscriptions
            </button>
          )}

          {/* AI-Generated Email */}
          <button
            onClick={gotoAIGeneratedEmail}
            className="text-gray-800 transition-colors duration-300 hover:text-amber-500 focus:outline-none text-left"
          >
            AI Email
          </button>
        </div>
      </div>

      {/* Profile and Authentication */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isAuthenticated ? (
          <>
            {profile?.profilePhoto ? (
              <span
                onMouseEnter={() => setIsOpen(true)}
                onClick={toggleDropdown}
                className="relative"
              >
                <img
                  src={profile.profilePhoto}
                  alt="Profile"
                  className="w-8 h-8 object-cover rounded-full border-2 border-white"
                />
              </span>
            ) : (
              <button
                onMouseEnter={() => setIsOpen(true)}
                onClick={toggleDropdown}
                className="bg-blue-200 text-gray-800 rounded-full p-2 hover:bg-blue-300 focus:outline-none"
              >
                <ProfileIcon />
              </button>
            )}
          </>
        ) : (
          <>
            {/* Signup and Login Links */}
            <Link
              to={routes.signup}
              className="text-sm text-white hover:text-amber-300 lg:hidden"
            >
              Signup
            </Link>
            <Link
              to={routes.signin}
              className="text-sm text-white hover:text-amber-300 lg:hidden"
            >
              Login
            </Link>
          </>
        )}
      </div>

      {/* Profile Dropdown */}
      {isOpen && (
        <div className="absolute right-4 top-14  w-36 bg-white border-1 border-zinc-500 rounded-lg shadow-lg z-50">
          <div className="absolute top-[-9px] right-4 w-4 h-4 bg-white border-t-2 border-l-2 border-zinc-500 transform rotate-45"></div>
          <div className="py-2">
            <Link
              to={routes.profile}
              className="flex items-center no-underline px-4 py-2 text-sm text-gray-600 hover:bg-gray-200  hover:rounded-md"
            >
              <User size={18} className="mr-2" />
              <span>Profile</span>
            </Link>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-sm text-gray hover:bg-gray-200 hover:rounded-md w-full"
            >
              <LogOut size={16} className="mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;