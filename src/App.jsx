import React from 'react'
import { BrowserRouter, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Account from './components/Account'
import ErrorPage from './components/ErrorPage'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './components/Protected'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/*',
      element: <ErrorPage />
    },
    {
      path: '/account',
      element: <Protected><Account /></Protected>
    }
  ])
  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  )
}

export default App