// Dashboard.jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Dashboard.css';
import logo from '../../assets/images/fantastiqo-logo.png';
import { 
  Search, 
  Add, 
  Notifications, 
  MoreVert, 
  Home, 
  Business, 
  People, 
  TrendingUp, 
  Email, 
  Event, 
  Phone, 
  Assignment, 
  CalendarToday, 
  Support, 
  MenuBook,
  Chat 
} from '@mui/icons-material';
import Leads from '../Leads/Leads';
import CreateLead from '../Leads/CreateLead';
import Opportunities from '../Opportunities/Opportunities';
import CreateOpportunity from '../Opportunities/CreateOpportunity';
import ChatWindow from '../chat/ChatWindow';


const Dashboard = () => {
  // TODO: Backend Integration Points:
    // - Add authentication check
    // - Implement user session management
    // - Set up WebSocket connections for real-time features
    // - Add API calls for dashboard data
    // - Implement notification system
    // - Add search functionality
    // - Handle error states and loading indicators
  return (

    // Main dashboard container
        // TODO: Add the following features:
        // - Header with search and notifications
        // - Sidebar navigation
        // - Main content area with routes
        // - Real-time updates
        // - Error boundaries
        // - Loading states
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <div className="logo-section">
          <Link to="/dashboard">
            <img src={logo} alt="Fantastiqo Logo" className="logo" />
          </Link>
        </div>

        <nav className="nav-menu">
          <div className="nav-group">
            <Link to="/dashboard" className="nav-item">
              <Home className="nav-icon" />
              Home
            </Link>
          </div>

          <div className="nav-group">
            <div className="nav-header">CRM</div>
            <Link to="/dashboard/accounts" className="nav-item">
              <Business className="nav-icon" />
              Accounts
            </Link>
            <Link to="/dashboard/contacts" className="nav-item">
              <People className="nav-icon" />
              Contacts
            </Link>
            <Link to="/dashboard/leads" className="nav-item">
              <People className="nav-icon" />
              Leads
            </Link>
            <Link to="/dashboard/opportunities" className="nav-item">
              <TrendingUp className="nav-icon" />
              Opportunities
            </Link>
          </div>

          <div className="nav-group">
            <div className="nav-header">Activities</div>
            <Link to="/dashboard/emails" className="nav-item">
              <Email className="nav-icon" />
              Emails
            </Link>
            <Link  to="/dashboard/chats" className='nav-item'>
              <Chat className='nav-icon' />
              Chat
            </Link>
            <Link to="/dashboard/meetings" className="nav-item">
              <Event className="nav-icon" />
              Meetings
            </Link>
            <Link to="/dashboard/calls" className="nav-item">
              <Phone className="nav-icon" />
              Calls
            </Link>
            <Link to="/dashboard/tasks" className="nav-item">
              <Assignment className="nav-icon" />
              Tasks
            </Link>
            <Link to="/dashboard/calendar" className="nav-item">
              <CalendarToday className="nav-icon" />
              Calendar
            </Link>
          </div>

          <div className="nav-group">
            <div className="nav-header">Support</div>
            <Link to="/dashboard/cases" className="nav-item">
              <Support className="nav-icon" />
              Cases
            </Link>
            <Link to="/dashboard/knowledge-base" className="nav-item">
              <MenuBook className="nav-icon" />
              Knowledge Base
            </Link>
          </div>
        </nav>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="top-actions">
            <button className="action-button">
              <Add />
            </button>
            <button className="action-button">
              <Notifications />
            </button>
            <button className="action-button">
              <MoreVert />
            </button>
          </div>
        </div>

        <div className="content-area">
          <Routes>
            <Route path="/" element={<div>Dashboard Home</div>} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/leads/create" element={<CreateLead />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/opportunities/create" element={<CreateOpportunity />} />
            <Route path="/chats" element={<ChatWindow/>} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
