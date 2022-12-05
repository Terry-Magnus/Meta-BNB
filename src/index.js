import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Places from "./assets/pages/places"

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/places",
        element: <Places />
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
