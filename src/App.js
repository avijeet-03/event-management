// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.js';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EventListing from './pages/EventListing';
import EventDetails from './pages/EventDetails';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import CreateEvent from './pages/CreateEvent';
import EditEvent from './pages/EditEvent';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup.js';
import Activity from './pages/Activity.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/events",
    element: <EventListing />
  },
  {
    path: "/activity",
    element: <Activity />
  },
  {
    path: "/events/:eventId",
    element: <EventDetails />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/create-event",
    element: <CreateEvent />
  },
  {
    path: "/edit-event/:eventId",
    element: <EditEvent />
  },
  {
    path: "/404",
    element: <NotFound />
  }
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
