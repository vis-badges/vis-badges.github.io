import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import BadgeBase from './BadgeBase';
import {downloadNodeAsPng} from "./utils/downloadUtils";

const QuantitativeBadge = forwardRef(function QuantitativeBadge({ badge, ...otherProps }, ref) {
    const badgeRef = useRef(null);
    const unitStr = badge.unit ? ` ${badge.unit}` : '';
    const finalLabel = `${badge.label || ''}: ${badge.value || ''}${unitStr}`;

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
        <div ref={badgeRef}>
            <BadgeBase
                label={finalLabel}
                description={badge.description}
                avatar={badge.avatar}
                icon1={badge.icon1}
                icon2={badge.icon2}
                {...otherProps}
            />
        </div>
    );
});

export default QuantitativeBadge;
