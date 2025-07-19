import { useState } from 'react'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Profile from './Components/Profile/Profile.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout/RootLayout.jsx'
import Settings from './Components/Settings/Settings.jsx'
import Help from './Components/Help/Help.jsx'
import MainPage from './Components/MainPage/MainPage.jsx'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/settings", element: <Settings /> },
      { path: "/help", element: <Help /> },
      //{ path: "/login", element: <LoginForm /> },
      //{ path: "/signup", element: <SignUpForm /> } 
    ]
  }
    
  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
