# Visualization Badges

A simple web application that demonstrates **Visualization Badges**—graphical labels used to convey data provenance, design decisions, and analysis insights alongside visualizations.


- **Badge Types & Rendering**
    - **Binary Badges:** Simple on/off indicators (e.g., "Open Data", "Data Sources Disclosed").
    - **Ordinal Badges:** Show graded values (e.g., "Data Completeness: Complete/Low").
    - **Categorical/List Badges:** Display multiple state options (e.g., "Data Licensing" choices).
    - **Quantitative Badges:** Support numeric values and interactive details with download functionality.
    - The `BadgeRenderer.jsx` component selects and renders the appropriate badge type based on metadata.

- **Data & Metadata**
    - Badge information is stored in JSON files:
        - `db.json` for binary badges.
        - `db-ordinal.json` for ordinal badges.
        - `db-list.json` for categorical/list badges.


## Installation & Running

1. **Clone the Repository:**
   ```bash
   git clone
   cd repo
   npm install
   npm run start


