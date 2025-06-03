import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout/RootLayout.jsx'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
    ]
  }
    
  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
