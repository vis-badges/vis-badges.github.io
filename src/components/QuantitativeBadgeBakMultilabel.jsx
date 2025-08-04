// QuantitativeBadge.jsx
import React, {
    useRef,
    forwardRef,
    useImperativeHandle,
    useState,
} from 'react';
import { useTheme } from '@mui/material/styles';
import BadgeBase from './BadgeBase';
import { downloadNodeAsPng } from "./utils/downloadUtils";

const QuantitativeBadge = forwardRef(function QuantitativeBadge(
    { badge, chipColor, ...otherProps },
    ref
) {
    const badgeRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    // Keep your existing top-row color logic
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
        // filled variant
        if (isLightMode) {
            rightBoxBg = '#f0f0f0';
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

    // Toggle the bottom area
    const handleToggle = () => {
        setExpanded((prev) => !prev);
    };

    // Example click handler for data sources
    const handleSourceClick = (sourceName) => {
        alert(`Clicked ${sourceName}`);
    };

    // Choose a dark color for the bottom area (adjust as needed)
    // plus a thin border. If you want it even darker or lighter, tweak the values.
    const bottomAreaBg = isLightMode ? '#3a3a3a' : '#333';
    const bottomAreaBorder = isLightMode ? '#2f2f2f' : '#222';

    // Build a multiline label
    const finalLabel = (
        <div style={{ cursor: 'pointer' }}>
            {/* TOP ROW (click toggles expansion) */}
            <div
                onClick={handleToggle}
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
                        padding: '0.5px 3px',
                        fontWeight: 'bold',
                        marginLeft: '3px',
                        borderTopRightRadius: '16px',
                        borderBottomRightRadius: '16px',
                    }}
                >
          {rightValue}
                    {unitStr}
        </span>
            </div>

            {/* BOTTOM AREA with 1px border, same dark background across entire rectangle */}
            {expanded && (
                <div
                    style={{
                        marginTop: '6px',
                        backgroundColor: bottomAreaBg,
                        border: `1px solid ${bottomAreaBorder}`,
                        padding: '6px',
                    }}
                >
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSourceClick('Data Source 1')}
                    >
                        Data Source 1
                    </div>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSourceClick('Data Source 2')}
                    >
                        Data Source 2
                    </div>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSourceClick('Data Source 3')}
                    >
                        Data Source 3
                    </div>
                </div>
            )}
        </div>
    );

    // Multiline Chip styling; pin the icon at the top
    const chipSx = {
        height: 'auto',
        '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
            width: '100%',
        },
        '& .MuiChip-icon, & .MuiChip-avatar': {
            alignSelf: 'flex-start',
            marginTop: '4px',
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
