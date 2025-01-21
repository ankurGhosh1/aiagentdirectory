import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <React.Fragment>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
