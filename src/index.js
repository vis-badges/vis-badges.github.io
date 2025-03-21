// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Import your global styles
import App from './App';
import Type1Page from "./pages/Type1Page";
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import DbLayout from "./layout/DbLayout";
import BadgeTable from "./pages/BadgeTable";
import OrdinalBadgeDataGrid from "./pages/OrdinalBadgeGrid";
import QuantitativeBadgeGrid from "./pages/QuantitativeBadgeGrid"
import BadgeDataGrid from "./pages/BadgeTable";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import BadgeEditorPage from "./pages/BadgeEditor";

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
                        path: 'type1',
                        Component: Type1Page
                    },
                    {
                        path: 'type2',
                        Component: BadgeDataGrid
                    },
                    {
                        path: 'ordinalBadges',
                        Component: OrdinalBadgeDataGrid
                    },
                    {
                        path: 'quantitativeBadges',
                        Component: QuantitativeBadgeGrid
                    },
                    {
                        path: 'badgeEditor',
                        Component: BadgeEditorPage
                    },
                    ]
            },
        ],
    },
]);
const theme = createTheme({
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: 'salmon',
                }
            },
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        </ThemeProvider>
     </React.StrictMode>
);


