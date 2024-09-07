import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";

const HomeRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};

export default HomeRoutes;
