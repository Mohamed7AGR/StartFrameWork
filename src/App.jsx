import {  createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "flowbite";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
