import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useContext } from "react";
 import ThemeContext from "./context/ThemeContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>sorry.........</h1>,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);


function App() {
  const {theme,changeTheme} = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
    <RouterProvider router={router} />;
    </div>
  )
  
}

export default App;
