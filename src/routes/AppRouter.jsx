import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../ui";
import { LoginPage } from "../auth";
import { RoutesHeros } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <RoutesHeros />
            </PrivateRouter>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        

      </Routes>
    </>
  );
};
