"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Toaster />
    </>
  );
};
