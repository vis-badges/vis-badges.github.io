import { ChipPropsColorOverrides } from '@mui/material/Chip';

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        confirmation: true;
    }
}
