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

    // outlined + light: background = baseColor, text = white
    // filled + light: background = light grey, text = baseColor
    // outlined + dark: background = baseColor, text = black
    // filled + dark: background = dark grey, text = black
    let rightBoxBg, rightTextColor;
    if (variant === 'outlined') {
        if (isLightMode) {
            rightBoxBg = baseColor;
            rightTextColor = '#fff';
        } else {
            rightBoxBg = baseColor;
            rightTextColor = '#000';
        }
    } else { // filled variant
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
                    // fontWeight: 'bold',
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
                iconIntent={badge.iconIntent}
                iconScope={badge.iconScope}
                chipColor={chipColor}
                chipSx={chipSx}
                {...otherProps}
            />
        </div>
    );
});

export default QuantitativeBadge;
