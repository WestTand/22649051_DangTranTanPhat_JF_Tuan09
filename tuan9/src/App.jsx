import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import CounterApp from "./pages/CounterApp";
import TodoApp from "./pages/TodoApp";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
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
      },
      {
        path: '/todo',
        element: <TodoApp />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/cart',
        element: <CartPage />
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
