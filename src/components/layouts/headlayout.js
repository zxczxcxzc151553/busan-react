import Header from "components/commons/header";
import React from "react";

const headlayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  );
};

export default headlayout;
