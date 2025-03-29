import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '@mui/material/styles';
import BadgeBase from './BadgeBase';
import { downloadNodeAsPng } from "./utils/downloadUtils";

const QuantitativeBadge = forwardRef(function QuantitativeBadge(
    { badge, chipColor, ...otherProps },
    ref
) {
    const badgeRef = useRef(null);
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    const baseColor =
        chipColor !== 'default'
            ? (theme.palette[chipColor]?.main || chipColor)
            : theme.palette.grey[500];

    const variant = otherProps.variant || 'filled';

    let rightBoxBg, rightTextColor;
    if (variant === 'outlined') {
        if (isLightMode) {
            rightBoxBg = baseColor;
            rightTextColor = '#fff';
        } else {
            rightBoxBg = baseColor;
            rightTextColor = '#000';
        }
    } else {
        if (isLightMode) {
            rightBoxBg = '#cfcfcf';
            rightTextColor = baseColor;
        } else {
            rightBoxBg = '#cfcfcf';
            rightTextColor = '#000';
        }
    }

    const downloadBadge = () => {
        if (!badgeRef.current) return;
        const fileName = `${badge.badgeName || badge.label}.png`;
        downloadNodeAsPng(badgeRef.current, fileName, 100);
    };

    useImperativeHandle(ref, () => ({
        downloadBadge,
    }));

    const leftLabel = badge.label || '';
    const rightValue = badge.value || '';
    const unitStr = badge.unit ? ` ${badge.unit}` : '';

    const badgeSize = otherProps.size || 'medium';
    const rightPadding = badgeSize === 'large' ? '2.5px 2.5px' : '0px 2.5px';

    const finalLabel = (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <span>{leftLabel}</span>
            <span
                style={{
                    backgroundColor: rightBoxBg,
                    color: rightTextColor,
                    padding: rightPadding,
                    marginLeft: '3px',
                    borderTopRightRadius: '16px',
                    borderBottomRightRadius: '16px',
                }}
            >
                {rightValue}
                {unitStr}
            </span>
        </div>
    );

    const rightPaddingChip = badgeSize === 'large' ? '4px !important' : '2px !important';

    const chipSx = {
        '& .MuiChip-label': {
            paddingRight: rightPaddingChip
        },
    };

    return (
        <div ref={badgeRef}>
            <BadgeBase
                label={finalLabel}
                description={badge.description}
                avatar={badge.avatar}
                intent={badge.intent}  // Pass intent from the badge
                type={badge.type}      // Pass type from the badge
                chipColor={chipColor}
                chipSx={chipSx}
                {...otherProps}
            />
        </div>
    );
});

export default QuantitativeBadge;
