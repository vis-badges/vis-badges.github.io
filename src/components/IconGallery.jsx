import React, { useState, useEffect, useMemo, useRef } from "react";
import {
    Box,
    TextField,
    Collapse,
    IconButton,
    Radio,
    RadioGroup,
    FormControlLabel,
    Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import * as MuiIcons from "@mui/icons-material"; // Import all icons
import { FixedSizeGrid as Grid } from "react-window"; // Import FixedSizeGrid from react-window
import { baseIconNames } from "../utils/icons"; // Use a single baseIconNames list

const iconStyles = ["Filled", "Outlined", "Rounded", "Sharp", "TwoTone"];
const numCols = 4; // Number of columns

export default function IconGallery({ onSelect }) {
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [selectedStyle, setSelectedStyle] = useState("");
    const containerRef = useRef(null); // Reference to the container for dynamic width

    // Dynamically collapse when search term is entered
    useEffect(() => {
        if (search && !expanded) {
            setExpanded(true);
        }
    }, [search]);

    // Memoize filtered icons for better performance
    const filteredIcons = useMemo(() => {
        return baseIconNames
            .map((name) => {
                const iconName = selectedStyle === "Filled" ? name : `${name}${selectedStyle}`;
                return iconName;
            })
            .filter((name) => name.toLowerCase().includes(search.toLowerCase()));
    }, [search, selectedStyle]);


    // Function to render each icon in the grid
    const renderIcon = ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * numCols + columnIndex; // Calculate the index for the grid
        const iconName = filteredIcons[index];
        const IconComponent = MuiIcons[iconName];

        return (
            <div style={style}>
                <IconButton onClick={() => onSelect(iconName)}>
                    {IconComponent ? <IconComponent fontSize="small" /> : null}
                </IconButton>
            </div>
        );
    };

    return (
        <Box ref={containerRef} sx={{ width: expanded ? 440 : 300, padding: 1, borderRadius: 2, transition: "width 0.3s" }}>

            {/* Expand/Collapse Toggle */}
            <Stack direction="row" alignItems="center" spacing={0}>
                <IconButton onClick={() => setExpanded(!expanded)}>
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>

                {/* Search Bar */}
                <TextField
                    label="Search Icons"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Stack>

            <Collapse in={expanded}>
                <Stack spacing={2} sx={{ mb: 1 }} direction="row">
                    {/* Left Side: Style Selector with Radio Buttons */}
                    <RadioGroup
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                    >
                        {iconStyles.map((style) => (
                            <FormControlLabel
                                key={style}
                                value={style}
                                control={<Radio size="small" />}
                                label={style}
                            />
                        ))}
                    </RadioGroup>

                    <Stack>
                        <Grid
                            columnCount={numCols} // Number of columns
                            columnWidth={300 / numCols} // Width of each column (dynamic)
                            height={300} // height of the visible window
                            rowCount={Math.ceil(filteredIcons.length / numCols)} // Number of rows
                            rowHeight={70} // Height of each row
                            width={300} // Use dynamic width from container
                        >
                            {renderIcon}
                        </Grid>
                    </Stack>
                </Stack>
            </Collapse>
        </Box>
    );
}
