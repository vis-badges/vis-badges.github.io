import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import Type1Page from "./pages/Type1Page";
import {createHashRouter, RouterProvider} from "react-router-dom";
import DbLayout from "./layout/DbLayout";
import BadgeDataGrid from "./pages/BadgeTable";

const router = createHashRouter([
    {
        Component: App,
        children: [
            {
                path: '/',
                Component: DbLayout,
                children: [
                    {
                        path: '',
                        Component: BadgeDataGrid,
                    },
                    {
                        path: 'compact',
                        Component: Type1Page
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


