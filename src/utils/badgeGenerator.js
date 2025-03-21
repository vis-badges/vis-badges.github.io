// src/utils/badgeGenerator.js
import * as d3 from 'd3';

export function generateBadgeSVG(badge) {
    const width = 200;
    const height = 50;

    // Create the SVG element with D3
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`);

    // Use custom color if provided; otherwise, use color based on Intent.
    const bgColor = badge.color || getColorForIntent(badge.Intent);

    // Background rectangle
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", bgColor);

    // Centered badge text
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("fill", "#fff")
        .text(badge.BadgeName);

    return svg.node().outerHTML;
}

function getColorForIntent(intent) {
    switch(intent) {
        case "Confirmation": return "#28a745"; // green
        case "Information": return "#17a2b8";  // blue
        case "Warning": return "#ffc107";      // yellow
        default: return "#6c757d";             // gray
    }
}
