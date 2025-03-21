import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import domtoimage from 'dom-to-image';
import BadgeBase from './BadgeBase';

const OrdinalBadge = forwardRef(function OrdinalBadge({ badge, ...otherProps }, ref) {
    const badgeRef = useRef(null);
    const labelWithValue = badge.value ? `${badge.label}: ${badge.value}` : badge.label;

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
        <div ref={badgeRef}>
            <BadgeBase
                label={labelWithValue}
                description={badge.description}
                avatar={badge.avatar}
                icon1={badge.icon1}
                icon2={badge.icon2}
                {...otherProps}
            />
        </div>
    );
});

export default OrdinalBadge;
