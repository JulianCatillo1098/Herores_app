import React from "react";
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./routes/AppRouter";
import { Navbar } from "./ui";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <h1 >HeroesAPP <h6><b>Julian Castillo</b></h6></h1>
      
      <AppRouter />
    </AuthProvider>
  );
};
