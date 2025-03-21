#!/bin/bash

# Read the icons.txt file, filter out names with Outlined, Rounded, Sharp, or TwoTone, then format as an array
cleaned_icons=$(grep -v -E "(Outlined|Rounded|Sharp|TwoTone)" icons.txt)

# Convert the cleaned list into a JavaScript array format
icon_array=$(echo "$cleaned_icons" | sed 's/^/"/; s/$/"/' | paste -sd, -)

# Print the result as a JavaScript array
echo "[$icon_array]"
