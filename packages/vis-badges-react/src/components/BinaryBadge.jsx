import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import BadgeBase from './BadgeBase';
import { downloadNodeAsPng } from "../utils/downloadUtils";

const BinaryBadge = forwardRef(function BinaryBadge(
    { badge, leftIconKey, rightIconKey, ...otherProps },
    ref
) {
    const badgeRef = useRef(null);

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
        <div ref={badgeRef} style={{ display: 'inline-block' }}>
            <BadgeBase
                label={badge.label}
                description={badge.description}
                avatar={badge.avatar}
                intent={badge.intent}
                type={badge.type}
                leftIconKey={leftIconKey}
                rightIconKey={rightIconKey}
                {...otherProps}
            />
        </div>
    );
});

export default BinaryBadge;


