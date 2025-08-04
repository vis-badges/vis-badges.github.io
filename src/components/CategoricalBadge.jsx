import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Box, Chip, Tooltip, Stack, Collapse, Badge, Avatar } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { downloadNodeAsPng } from "./utils/downloadUtils";
import { getMuiIcon } from "./utils/getIcon";
import {icon_intent_map, icon_scope_map} from "./utils/iconMappings";

function getAvatarElement(avatar) {
    if (!avatar) return null;
    if (avatar.type === 'letter') return <Avatar>{avatar.value}</Avatar>;
    if (avatar.type === 'image') return <Avatar src={avatar.value} />;
    return null;
}

function resolveIcon(key, badge) {
    if (key === 'avatar') return getAvatarElement(badge.avatar);
    if (key !== 'none') {
        let iconValue = "";
        if (key === 'iconIntent') {
            iconValue = icon_intent_map[badge.intent] || "";
        } else if (key === 'iconScope') {
            iconValue = icon_scope_map[badge.type] || "";
        }
        return iconValue ? getMuiIcon(iconValue) : null;
    }
    return null;
}

const CategoricalBadge = forwardRef(function CategoricalBadge(
    {
        badge,
        size = 'medium',
        variant = 'filled',
        leftIconKey = 'iconIntent',
        rightIconKey = 'iconIntent',
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

    // For 'large', use medium size; for small chips, hide the label.
    const muiSize = size === 'large' ? 'medium' : 'small';
    const labelHidden = size === 'small';
    // When label is hidden, set it to undefined so MUI doesn't reserve space for it.
    const mainChipLabel = labelHidden ? undefined : badge.label;

    const handleExpandClick = () => {
        setExpanded((prev) => !prev);
    };

    const downloadBadge = () => {
        const node = badgeRef.current;
        if (!node) return;
        const fileName = `${badge.badgeName || badge.label}.png`;
        downloadNodeAsPng(node, fileName);
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
                sx={{
                    ...(!isMuiColor && {
                        backgroundColor: chipColor,
                        color: '#fff',
                    }),
                    ...(labelHidden && {
                        pl: 0,
                        pr: 0,
                        minWidth: 26, //IN CASE OF MINI
                        '& .MuiChip-label': { display: 'none' },
                        '& .MuiChip-icon': { marginLeft: 0, marginRight: 0 },
                    }),
                }}
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
                <Stack direction="row" flexWrap="wrap" mt={0.1}>
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
