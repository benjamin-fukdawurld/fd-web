import type { ReactNode } from "react";
import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import { LayoutContainer } from "./style";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
}
