"use client";
import useLenis from "@/hooks/useLenis";
import React from "react";

const smoothScroller = ({ children }) => {
  useLenis();
  return <>{children}</>;
};

export default smoothScroller;
