import React, { ReactElement } from "react";
import Header from "./Header";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
