import {ReactRouterAppProvider} from "@toolpad/core/react-router";
import {Outlet} from "react-router-dom";
import Compact from "./pages/Compact";
import Apps from "@mui/icons-material/Apps";
import React from "react";
import {ViewList} from "@mui/icons-material";


const BRANDING = {
    title: 'Chart Badges: A Framework for communicating Provenance to Non Experts Audiences for Consideration and Awareness',
    // logo: <InsertEmoticonIcon />,
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
