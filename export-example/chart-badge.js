import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import HelloWorld from './hello-world';

class ChartHello extends HTMLElement {
    connectedCallback() {
        // Create shadow root
        const shadow = this.attachShadow({ mode: 'open' });
        // Create a mount point for React
        const mountPoint = document.createElement('div');
        shadow.appendChild(mountPoint);

        // Create an Emotion cache that targets the shadow root directly.
        const cache = createCache({
            key: 'mui',
            container: shadow,  // use the shadow root as container
            prepend: true,      // ensure the styles are inserted at the beginning
        });

        const theme = createTheme();

        const root = ReactDOM.createRoot(mountPoint);
        root.render(
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <HelloWorld />
                </ThemeProvider>
            </CacheProvider>
        );
    }
}

customElements.define('chart-hello', ChartHello);
