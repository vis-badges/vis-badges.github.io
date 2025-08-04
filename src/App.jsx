import {ReactRouterAppProvider} from "@toolpad/core/react-router";
import {Outlet} from "react-router-dom";
import Compact from "./pages/Compact";
import Apps from "@mui/icons-material/Apps";
import React from "react";
import {Assignment, Category, ColorLens, GroupsOutlined, Info, UnfoldMore, ViewList} from "@mui/icons-material";
import TeaserFigure from "./pages/TeaserFigure";


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
        segment: 'genres',
        title: 'Genres',
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
