import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Compact from "./pages/Compact";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Main from "./Main";
import BadgeDataGrid from "./pages/Table";

const router = createHashRouter([
    {
        Component: App,
        children: [
            {
                path: '/',
                Component: Main,
                children: [
                    {
                        path: '',
                        Component: BadgeDataGrid,
                    },
                    {
                        path: 'compact',
                        Component: Compact
                    },
                    {
                        path: 'table',
                        Component: BadgeDataGrid
                    }
                    ]
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
     </React.StrictMode>
);


