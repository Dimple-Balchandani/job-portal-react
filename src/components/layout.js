import React from "react";
import Header from "./header";


const Layout = ({children, title}) => {
    return (
        <React.Fragment>
            <Header/>
            <h3>{title}</h3>
            {children}
        </React.Fragment>
    )
};

export default Layout;