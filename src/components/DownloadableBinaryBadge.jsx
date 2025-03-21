import React, { useRef } from 'react';
import domtoimage from 'dom-to-image';
import ImageTracer from 'imagetracerjs';
import { Box, Chip, Tooltip, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';

const getIcon = (intent) => {
    switch (intent) {
        case 'Confirmation':
            return <CheckCircleIcon />;
        case 'Warning':
            return <WarningIcon />;
        case 'Information':
            return <InfoIcon />;
        default:
            return null;
    }
};

export default function BinaryBadge({ badge, size, variant, withIcon }) {
    const badgeRef = useRef(null);

    const downloadBadge = () => {
        const scale = 100; // Adjust scale for desired resolution
        const node = badgeRef.current;
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
                pngLink.download = `${badge.badgeName}.png`;
                pngLink.href = dataUrl;
                pngLink.click();

                };
                img.src = dataUrl;
            })
            .catch((error) => {
                console.error('oops, something went wrong!', error);
            });
    };

    return (
        <div>
            <Box>
                <div ref={badgeRef}>
                    <Tooltip title={badge.description}>
                        <Chip
                            color="warning"
                            icon={withIcon ? getIcon(badge.intent) : null}
                            label={badge.badgeName}
                            size={size}
                            variant={variant === 'outlined' ? 'outlined' : 'filled'}
                            clickable
                        />
                    </Tooltip>
                </div>
            </Box>
            <Button variant="contained" onClick={downloadBadge} sx={{ mt: 2 }}>
                Download Badge (PNG &amp; SVG)
            </Button>
        </div>
    );
}
