import domtoimage from 'dom-to-image';

export function downloadNodeAsPng(node, fileName, scale = 50) {
    if (!node) return;
    const width = node.clientWidth * scale;
    const height = node.clientHeight * scale;
    domtoimage
        .toPng(node, {
            width,
            height,
            bgcolor: 'transparent', // ensures no background is applied
            style: {
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
            },
        })
        .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = fileName;
            link.href = dataUrl;
            link.click();
        })
        .catch((error) => {
            console.error('oops, something went wrong!', error);
        });
}


