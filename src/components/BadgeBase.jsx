import React from 'react';
import { Avatar, Box, Chip, Tooltip } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { BiSolidInfoSquare } from 'react-icons/bi';

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

function getMuiIcon(iconName, size) {
    if (!iconName) return null;

    if (iconName === 'Info') {
        const iconSize = size === 'large' ? 22 : 18;
        return <BiSolidInfoSquare size={iconSize} />;
    }

    if (!Icons[iconName]) return null;
    const IconComponent = Icons[iconName];
    return <IconComponent fontSize="small" />;
}

function getAvatarElement(avatar) {
    if (!avatar) return null;
    if (avatar.type === 'letter') return <Avatar>{avatar.value}</Avatar>;
    if (avatar.type === 'image') return <Avatar src={avatar.value} />;
    return null;
}

function resolveIcon(key, { avatar, iconIntent, iconScope, iconTopic }, size) {
    if (key !== 'none') {
        console.log(key)
        const iconValue = key === 'iconIntent' ? iconIntent : key === 'iconScope' ? iconScope : iconTopic;
        console.log(iconValue);
        return getMuiIcon(iconValue, size);
    }
    return null;
}

export default function BadgeBase({
                                      label,
                                      description = '',
                                      avatar,
                                      iconIntent,
                                      iconScope,
                                      iconTopic,
                                      size = 'medium',
                                      variant = 'filled',
                                      // leftIconKey and rightIconKey determine what is shown.
                                      // For left, "avatar" renders the avatar; "none" renders nothing; otherwise the corresponding icon.
                                      leftIconKey = 'iconIntent',
                                      rightIconKey = 'iconIntent',
                                      chipColor = 'default',
                                  }) {
    const { muiSize, hideLabel } = mapChipSize(size);
    const leftIcon = resolveIcon(leftIconKey, { avatar, iconIntent, iconScope, iconTopic }, size);
    const rightIcon = resolveIcon(rightIconKey, { avatar, iconIntent, iconScope, iconTopic }, size);
    const displayLabel = hideLabel ? '' : label;

    return (
        <Box>
            <Tooltip title={description}>
                <Chip
                    label={displayLabel}
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
