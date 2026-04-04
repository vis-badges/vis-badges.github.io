import {ReactRouterAppProvider} from "@toolpad/core/react-router";
import {Outlet} from "react-router-dom";
import Compact from "./pages/Compact";
import Apps from "@mui/icons-material/Apps";
import React from "react";
import {Assignment, Category, GroupsOutlined, UnfoldMore, ViewInAr, ViewList} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";


const BRANDING = {
    title: 'Visualization Badges: Communicating Design and Provenance through Graphical Labels Alongside Visualizations',
    logo: ""
    // logo: <Category />,
    // homeUrl: 'http://google.com',
};

const NEW_PILL = (
    <Box
        component="span"
        sx={{
            mr: 1.25,
            px: 0.75,
            py: 0.15,
            borderRadius: 999,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            color: 'text.secondary',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            lineHeight: 1.5,
            whiteSpace: 'nowrap',
        }}
    >
        NEW
    </Box>
);

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
        title: 'Framework',
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
        action: NEW_PILL,
    },
    {
        segment: 'badge-library',
        title: 'badge Library',
        icon: <ViewInAr />,
        action: NEW_PILL,
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
