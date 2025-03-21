import React, {
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { Box, Chip, Tooltip, Stack, Collapse, Badge, Avatar } from '@mui/material';
import * as Icons from '@mui/icons-material';
import domtoimage from 'dom-to-image';

function getMuiIcon(iconName) {
    if (!iconName || !Icons[iconName]) return null;
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

const CategoricalBadge = forwardRef(function CategoricalBadge(
    {
        badge,
        size = 'medium',
        variant = 'filled',
        leftIconKey = 'icon1', // 'none', 'avatar', 'icon1', 'icon2', 'icon3'
        rightIconKey = 'icon1', // 'none', 'icon1', 'icon2', 'icon3'
        chipColor = 'default',
    },
    ref
) {
    const [expanded, setExpanded] = useState(false);
    const badgeRef = useRef(null);

    const values = Array.isArray(badge.values) ? badge.values : [];
    const count = values.length;

    const validMuiColors = [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
    ];
    const isMuiColor = validMuiColors.includes(chipColor);

    let leftIcon = null;
    if (leftIconKey === 'avatar') {
        leftIcon = getAvatarElement(badge.avatar);
    } else if (leftIconKey !== 'none') {
        let iconValue;
        if (leftIconKey === 'icon1') iconValue = badge.icon1;
        else if (leftIconKey === 'icon2') iconValue = badge.icon2;
        else if (leftIconKey === 'icon3') iconValue = badge.icon3;
        leftIcon = getMuiIcon(iconValue);
    }

    let rightIcon = null;
    if (rightIconKey !== 'none') {
        let iconValue;
        if (rightIconKey === 'icon1') iconValue = badge.icon1;
        else if (rightIconKey === 'icon2') iconValue = badge.icon2;
        else if (rightIconKey === 'icon3') iconValue = badge.icon3;
        rightIcon = getMuiIcon(iconValue);
    }

    const muiSize = size === 'large' ? 'medium' : 'small';
    const labelHidden = size === 'small';
    const mainChipLabel = labelHidden ? '' : badge.label;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const downloadBadge = () => {
        const scale = 100; // Adjust scale for desired resolution
        const node = badgeRef.current;
        if (!node) return;
        const width = node.clientWidth * scale;
        const height = node.clientHeight * scale;
        domtoimage
            .toPng(node, {
                width,
                height,
                style: {
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                },
            })
            .then((dataUrl) => {
                const pngLink = document.createElement('a');
                pngLink.download = `${badge.badgeName || badge.label}.png`;
                pngLink.href = dataUrl;
                pngLink.click();
            })
            .catch((error) => {
                console.error('oops, something went wrong!', error);
            });
    };

    useImperativeHandle(ref, () => ({
        downloadBadge,
    }));

    return (
        <Box position="relative" ref={badgeRef}>
            <Chip
                label={mainChipLabel}
                size={muiSize}
                variant={variant}
                // Render avatar if leftIconKey is 'avatar'; otherwise render icon
                avatar={leftIconKey === 'avatar' ? leftIcon : null}
                icon={leftIconKey !== 'avatar' ? leftIcon : null}
                deleteIcon={rightIcon}
                onDelete={rightIcon ? () => {} : undefined}
                clickable
                onClick={handleExpandClick}
                color={isMuiColor ? chipColor : 'default'}
                sx={{
                    ...(!isMuiColor && {
                        backgroundColor: chipColor,
                        color: '#fff',
                    }),
                }}
            />

            {!expanded && !!count && (
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
                        let subLabel, subTooltip, subLink;
                        if (typeof val === 'object' && val !== null) {
                            subLabel = val.label || '';
                            subTooltip = val.tooltip || '';
                            subLink = val.link;
                        } else {
                            subLabel = String(val);
                            subTooltip = '';
                            subLink = null;
                        }
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
        </Box>
    );
});

export default CategoricalBadge;
