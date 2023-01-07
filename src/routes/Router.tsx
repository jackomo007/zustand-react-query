import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";

import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound/index";

const Router = () => {
  const publicRoutes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: NotFound
    }
  ]
  
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({path, component: Component}) => (
          <Route path={path} element={<Component/>} /> // warning
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;