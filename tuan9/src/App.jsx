import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import RootPage from "./pages/RootPage";
import CounterApp from "./pages/CounterApp";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
