// CategoricalBadge.jsx
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Box, Chip, Tooltip, Stack, Collapse, Badge, Avatar } from '@mui/material';
import * as Icons from '@mui/icons-material';
import {downloadNodeAsPng} from "./utils/downloadUtils";

function getMuiIcon(iconName) {
    if (!iconName || !Icons[iconName]) return null;
    const IconComponent = Icons[iconName];
    return <IconComponent fontSize="small" />;
}

function getAvatarElement(avatar) {
    if (!avatar) return null;
    if (avatar.type === 'letter') return <Avatar>{avatar.value}</Avatar>;
    if (avatar.type === 'image') return <Avatar src={avatar.value} />;
    return null;
}

// Helper to determine which icon to render.
function resolveIcon(key, badge) {
    if (key === 'avatar') return getAvatarElement(badge.avatar);
    if (key !== 'none') {
        const iconValue = key === 'iconIntent' ? badge.iconIntent : key === 'iconScope' ? badge.iconScope : badge.iconTopic;
        return getMuiIcon(iconValue);
    }
    return null;
}

const CategoricalBadge = forwardRef(function CategoricalBadge(
    {
        badge,
        size = 'medium',
        variant = 'filled',
        leftIconKey = 'iconIntent', // options: 'none', 'avatar', 'iconIntent', 'iconScope', 'iconTopic'
        rightIconKey = 'iconIntent', // options: 'none', 'iconIntent', 'iconScope', 'iconTopic'
        chipColor = 'default',
    },
    ref
) {
    const [expanded, setExpanded] = useState(false);
    const badgeRef = useRef(null);

    const values = Array.isArray(badge.values) ? badge.values : [];
    const count = values.length;
    const validMuiColors = ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'];
    const isMuiColor = validMuiColors.includes(chipColor);

    const leftIcon = resolveIcon(leftIconKey, badge);
    const rightIcon = resolveIcon(rightIconKey, badge);

    const muiSize = size === 'large' ? 'medium' : 'small';
    const labelHidden = size === 'small';
    const mainChipLabel = labelHidden ? '' : badge.label;

    const handleExpandClick = () => {
        setExpanded((prev) => !prev);
    };

    const downloadBadge = () => {
        const node = badgeRef.current;
        if (!node) return;
        const fileName = `${badge.badgeName || badge.label}.png`;
        downloadNodeAsPng(node, fileName, 100);
    };

    useImperativeHandle(ref, () => ({
        downloadBadge,
    }));

    return (
        <div ref={badgeRef} style={{display: 'inline-block'}}>
            <Chip
                label={mainChipLabel}
                size={muiSize}
                variant={variant}
                avatar={leftIconKey === 'avatar' ? leftIcon : null}
                icon={leftIconKey !== 'avatar' ? leftIcon : null}
                deleteIcon={rightIcon}
                onDelete={rightIcon ? () => {} : undefined}
                clickable
                onClick={handleExpandClick}
                color={isMuiColor ? chipColor : 'default'}
                sx={
                    !isMuiColor && {
                        backgroundColor: chipColor,
                        color: '#fff',
                    }
                }
            />

            {!expanded && count > 0 && (
                <Badge
                    badgeContent={count}
                    sx={{
                        position: 'relative',
                        top: -9,
                        right: -6,
                        '& .MuiBadge-badge': (theme) => ({
                            bgcolor:
                                chipColor === 'default'
                                    ? theme.palette.mode === 'light'
                                        ? theme.palette.grey[300]
                                        : theme.palette.grey[700]
                                    : theme.palette[chipColor]?.main,
                            color:
                                chipColor === 'default'
                                    ? theme.palette.getContrastText(
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[300]
                                            : theme.palette.grey[700]
                                    )
                                    : theme.palette.getContrastText(theme.palette[chipColor]?.main),
                        }),
                    }}
                    overlap="rectangular"
                />
            )}

            <Collapse in={expanded} timeout={0} sx={{ transition: 'none' }} unmountOnExit>
                <Stack direction="row" flexWrap="wrap" mt={0.3}>
                    {values.map((val, idx) => {
                        const { label: subLabel = '', tooltip: subTooltip = '', link: subLink } =
                            typeof val === 'object' && val !== null ? val : { label: String(val) };
                        return (
                            <Tooltip key={idx} title={subTooltip}>
                                <Chip
                                    label={subLabel}
                                    size="small"
                                    variant="outlined"
                                    onClick={subLink ? () => window.open(subLink, '_blank') : undefined}
                                    color={isMuiColor ? chipColor : 'default'}
                                    sx={{
                                        height: '16px',
                                        borderRadius: '8px',
                                        fontSize: '0.65rem',
                                    }}
                                />
                            </Tooltip>
                        );
                    })}
                </Stack>
            </Collapse>
        </div>
    );
});

export default CategoricalBadge;
