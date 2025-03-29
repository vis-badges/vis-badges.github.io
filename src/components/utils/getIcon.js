import {BiSolidInfoSquare} from "react-icons/bi";
import * as Icons from "@mui/icons-material";
import React from "react";

export function getMuiIcon(iconName, size) {
    if (!iconName) return null;

    if (iconName === 'Info') {
        const iconSize = size === 'large' ? 22 : 18;
        return <BiSolidInfoSquare size={iconSize} />;
    }

    if (!Icons[iconName]) return null;
    const IconComponent = Icons[iconName];
    return <IconComponent fontSize="small" />;
}
