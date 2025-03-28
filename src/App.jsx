import {ReactRouterAppProvider} from "@toolpad/core/react-router";
import {Outlet} from "react-router-dom";
import Compact from "./pages/Compact";
import Apps from "@mui/icons-material/Apps";
import React from "react";
import {Category, ViewList} from "@mui/icons-material";


const BRANDING = {
    title: 'Visualization Badges: Communicating Design and Provenance through Graphical Labels Alongside Visualizations',
    logo: ""
    // logo: <Category />,
    // homeUrl: 'http://google.com',
};

const NAVIGATION = [
    {
        segment: 'compact',
        title: 'Chart Badges Catalog',
        icon: <Apps />,
        component: Compact
    },
    {
        segment: 'table',
        title: 'Chart Badges',
        icon:  <ViewList />,
    }
];



function App() {
    return (
        <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
            <Outlet />
        </ReactRouterAppProvider>
    );
}


export default App;
