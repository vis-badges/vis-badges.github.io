import React from 'react';
import { Box, Chip, Tooltip, Avatar } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { IconInfoSquareFilled } from '@tabler/icons-react'
import { BiSolidInfoSquare } from "react-icons/bi";

function mapChipSize(customSize) {
    switch (customSize) {
        case 'small':
            return { muiSize: 'small', hideLabel: true };
        case 'medium':
            return { muiSize: 'small', hideLabel: false };
        case 'large':
            return { muiSize: 'medium', hideLabel: false };
        default:
            return { muiSize: 'medium', hideLabel: false };
    }
}

function getMuiIcon(iconName, customSize) {
    if (!iconName) return null;

    if (iconName === "Info" && customSize === 'medium') {
        return <BiSolidInfoSquare size={18} />
    }
    else if (iconName === "Info" && customSize === 'large') {
        return <BiSolidInfoSquare size={22} />;
    }

    if (!Icons[iconName]) return null;

    const IconComponent = Icons[iconName];
    return <IconComponent fontSize="small" />;
}
function getAvatarElement(avatar) {
    if (!avatar) return null;
    if (avatar.type === 'letter') {
        return <Avatar>{avatar.value}</Avatar>;
    }
    if (avatar.type === 'image') {
        return <Avatar src={avatar.value} />;
    }
    return null;
}

export default function BadgeBase({
                                      label,
                                      description = '',
                                      avatar,
                                      icon1,
                                      icon2,
                                      icon3,
                                      size = 'medium',
                                      variant = 'filled',
                                      // leftIconKey and rightIconKey determine what is shown.
                                      // For left, "avatar" will render the avatar; "none" renders nothing; otherwise the corresponding icon.
                                      leftIconKey = 'icon1',
                                      rightIconKey = 'icon1',
                                      chipColor = 'default',
                                  }) {
    const { muiSize, hideLabel } = mapChipSize(size);

    let leftIcon = null;
    if (leftIconKey === 'avatar') {
        leftIcon = getAvatarElement(avatar);
    } else if (leftIconKey !== 'none') {
        let iconValue;
        if (leftIconKey === 'icon1') iconValue = icon1;
        else if (leftIconKey === 'icon2') iconValue = icon2;
        else if (leftIconKey === 'icon3') iconValue = icon3;
        leftIcon = getMuiIcon(iconValue, size);
    }

    let rightIcon = null;
    if (rightIconKey !== 'none') {
        let iconValue;
        if (rightIconKey === 'icon1') iconValue = icon1;
        else if (rightIconKey === 'icon2') iconValue = icon2;
        else if (rightIconKey === 'icon3') iconValue = icon3;
        rightIcon = getMuiIcon(iconValue, size);
    }

    const finalLabel = hideLabel ? '' : label;

    return (
        <Box>
            <Tooltip title={description}>
                <Chip
                    label={finalLabel}
                    size={muiSize}
                    variant={variant}
                    avatar={leftIconKey === 'avatar' ? leftIcon : null}
                    icon={leftIconKey !== 'avatar' ? leftIcon : null}
                    deleteIcon={rightIcon}
                    onDelete={rightIcon ? () => {} : undefined}
                    clickable
                    color={chipColor}
                />
            </Tooltip>
        </Box>
    );
}

