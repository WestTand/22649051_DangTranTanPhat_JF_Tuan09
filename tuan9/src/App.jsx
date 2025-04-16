import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import RootPage from "./pages/RootPage"
import CounterApp from "./pages/CounterApp"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <CounterApp />
      }
    ]
  }
])



function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
