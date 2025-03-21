import {ReactRouterAppProvider} from "@toolpad/core/react-router";
import {Outlet} from "react-router-dom";
import Label from "@mui/icons-material/Label";
import Type1Page from "./pages/Type1Page";
import BarChartIcon from "@mui/icons-material/BarChart";
import Apps from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import BadgeEditorPage from "./pages/BadgeEditor";
import {Create, ViewList} from "@mui/icons-material";


const BRANDING = {
    title: 'Chart Badges: A Framework for communicating Provenance to Non Experts Audiences for Consideration and Awareness',
    // logo: <InsertEmoticonIcon />,
    // homeUrl: 'http://google.com',
};

const NAVIGATION = [
    {
        segment: 'type1',
        title: 'Chart Badges Catalog',
        icon: <Apps />,
        component: Type1Page
    },
    {
        segment: 'type2',
        title: 'Chart Badges',
        icon:  <ViewList />,
    },
    // {
    //     segment: 'ordinalBadges',
    //     title: 'Ordinal Badge Table',
    //     icon: <Label />,
    // },
    // {
    //     segment: 'quantitativeBadges',
    //     title: 'Quantitative Badge Table',
    //     icon: <Label />,
    // },
    // {
    //     kind: 'divider',
    // },
    // {
    //     segment: 'badgeEditor',
    //     title: 'Badge Editor',
    //     icon: <Create />,
    //     // You can directly reference the page here if you want:
    //     component: BadgeEditorPage
    // },
    // {
    //     kind: 'divider',
    // },
    // {
    //     segment: 'examples',
    //     title: 'Examples',
    //     icon: <BarChartIcon />,
    //     children: [
    //         {
    //             segment: 'ecci',
    //             title: 'ECCI',
    //             icon: <DescriptionIcon />,
    //         },
    //         {
    //             segment: 'peacerep',
    //             title: 'PeaceRep',
    //             icon: <DescriptionIcon />,
    //         },
    //         {
    //             segment: 'nase',
    //             title: 'NASA',
    //             icon: <DescriptionIcon />,
    //         }
    //     ],
    // }
];



function App() {
    return (
        <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
            <Outlet />
        </ReactRouterAppProvider>
    );
}


export default App;
