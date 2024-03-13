// App.js
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import EventListing from './pages/EventListing';
import EventDetails from './pages/EventDetails';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import CreateEvent from './pages/CreateEvent';
import EditEvent from './pages/EditEvent';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes path="/" exact component={Home} />
      <Routes path="/login" component={Login} />
      <Routes path="/registration" component={Registration} />
      <Routes path="/dashboard" component={Dashboard} />
      <Routes path="/events" exact component={EventListing} />
      <Routes path="/events/:eventId" component={EventDetails} />
      <Routes path="/profile" component={Profile} />
      <Routes path="/settings" component={Settings} />
      <Routes path="/create-event" component={CreateEvent} />
      <Routes path="/edit-event/:eventId" component={EditEvent} />
      <Routes path="/404" component={NotFound} />
    </Router>
  );
}

export default App;
