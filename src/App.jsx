import {ReactRouterAppProvider} from "@toolpad/core/react-router";
import {Outlet} from "react-router-dom";
import Compact from "./pages/Compact";
import Apps from "@mui/icons-material/Apps";
import React from "react";
import {Assignment, Category, GroupsOutlined, UnfoldMore, ViewList} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";


const BRANDING = {
    title: 'Visualization Badges: Communicating Design and Provenance through Graphical Labels Alongside Visualizations',
    logo: ""
    // logo: <Category />,
    // homeUrl: 'http://google.com',
};

const NAVIGATION = [
    // {
    //     kind: 'header',
    //     title: 'Catalog',
    // },
    // {
    //     segment: 'teaser',
    //     title: '[TEMP]TEASER FIG',
    //     component: TeaserFigure
    // },
    {
        segment: 'compact',
        title: 'Visualization Badges Catalog',
        icon: <Apps />,
        component: Compact
    },
    {
        segment: 'table',
        title: 'Visualization Badges Table',
        icon:  <ViewList />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Visualization Badge',
    },
    {
        segment: 'system',
        title: 'System',
        icon: <Category />,

    },
    // {
    //     segment: 'design',
    //     title: 'Design',
    //     icon: <ColorLens/>
    // },
    {
        segment: 'guidelines',
        title: 'Guidelines',
        icon: <Assignment />,
    },
    {
        segment: 'examples',
        title: 'Examples',
        icon: <UnfoldMore />,
    },
    {
        kind: 'divider',
    },
    {
        segment: 'submit',
        title: 'Submit a Badge',
        icon: <AddIcon />,
    },
    {
        segment: 'about',
        title: 'About',
        icon: <GroupsOutlined />,
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
