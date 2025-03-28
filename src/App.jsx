import {ReactRouterAppProvider} from "@toolpad/core/react-router";
import {Outlet} from "react-router-dom";
import Type1Page from "./pages/Type1Page";
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
        component: Type1Page
    },
    {
        segment: 'table',
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
