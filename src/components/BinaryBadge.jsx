import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import domtoimage from 'dom-to-image';
import BadgeBase from './BadgeBase';

const BinaryBadge = forwardRef(function BinaryBadge({ badge, leftIconKey, rightIconKey, ...otherProps }, ref) {
    const badgeRef = useRef(null);

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
                // Download PNG
                const pngLink = document.createElement('a');
                pngLink.download = `${badge.badgeName || badge.label}.png`;
                pngLink.href = dataUrl;
                pngLink.click();
            })
            .catch((error) => {
                console.error('oops, something went wrong!', error);
            });
    };

    // Expose downloadBadge to parent via ref
    useImperativeHandle(ref, () => ({
        downloadBadge,
    }));

    return (
        <Box>
            <div ref={badgeRef}>
                <BadgeBase
                    label={badge.label}
                    description={badge.description}
                    avatar={badge.avatar}
                    icon1={badge.icon1}
                    icon2={badge.icon2}
                    icon3={badge.icon3}
                    leftIconKey={leftIconKey}
                    rightIconKey={rightIconKey}
                    {...otherProps}
                />
            </div>
        </Box>
    );
});

export default BinaryBadge;
