import * as React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./screens/home/Home";
import Contacts from "./screens/contact/Contacts";
import Catalog from "./screens/catalog/Catalog";
import SingleProduct from "./screens/singleProduct/SingleProduct";

const Layout = () => {
  return (
    <div className="app">
      <Nav />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/product",
        element: <SingleProduct />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export default router;
