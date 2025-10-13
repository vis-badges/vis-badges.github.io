import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Compact from "./pages/Compact";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Main from "./Main";
import BadgeDataGrid from "./pages/Table";
import Genres from "./pages/Genres";
import Examples from "./pages/Examples";
import About from "./pages/About";
import Guidelines from "./pages/Guidelines";

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
                    // {
                    //     path: 'teaser',
                    //     Component: TeaserFigure
                    // },
                    {
                        path: 'table',
                        Component: BadgeDataGrid
                    },
                    // {
                    //     path: 'design',
                    //     Component: Design
                    // },
                    {
                        path: 'about',
                        Component: About
                    },
                    {
                        path: 'genres',
                        Component: Genres
                    },
                    {
                        path: 'examples',
                        Component: Examples
                    },
                    {
                        path: 'guidelines',
                        Component: Guidelines
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


