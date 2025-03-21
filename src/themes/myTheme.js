import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
    palette: {
        customGreen: {
            main: '#7DC95E',
            light: '#A3D97D',
            dark: '#5BA94B',
            contrastText: '#fff',
        },
        customOrange: {
            main: '#FF9B54',
            light: '#FFB784',
            dark: '#E6893E',
            contrastText: '#fff',
        },
    },
});

export default myTheme;
