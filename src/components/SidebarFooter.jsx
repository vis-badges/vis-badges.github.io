import {Typography} from "@mui/material";

export default function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? '© IEEE' : `© ${new Date().getFullYear()} InfoVis25 Submission`}
    </Typography>
  );
}