import React from "react";
import { Outlet } from "react-router-dom";

const MyFamdomRoot: React.FC = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default MyFamdomRoot;
