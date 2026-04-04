import React from "react";
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import useVisBadgeLibrary from "../hooks/useVisBadgeLibrary";

const HOSTED_BUNDLE_URL = "https://vedelsbrunner.github.io/badge-lib/dist-wc/vis-badge.js";
const LOCAL_BUNDLE_URL = `${(process.env.PUBLIC_URL || "").replace(/\/+$/, "") || ""}/vis-badge.js`;
const INSTALL_SNIPPET = `<script type="module" src="${HOSTED_BUNDLE_URL}"></script>`;

const EXAMPLE_CARDS = [
    {
        title: "Regular badges",
        helper: "",
        badges: [
            {
                label: "Background Reading Available",
                description: "Indicates that extra materials or readings are provided for additional context.",
                "action-text": "read more",
                "action-icon": "ExternalLink",
                color: "rgb(46, 125, 50)",
                icon: "Confirmation",
                type: "mono",
                variant: "filled",
            },
            {
                label: "Missing Data",
                description:
                    "The source dataset is not complete, so some records may be missing because collecting and maintaining the full set is difficult.",
                "action-text": "definitions and notes",
                "action-icon": "ExternalLink",
                color: "rgb(237, 108, 2)",
                icon: "Warning",
                type: "mono",
                variant: "filled",
            },
            {
                label: "Data Filtered",
                description:
                    "Indicates that data was included or excluded based on specific conditions or statuses.",
                color: "rgb(2, 136, 209)",
                icon: "Info",
                type: "mono",
                variant: "filled",
            },
        ],
        markup: `<vis-badge
  label="Background Reading Available"
  description="Indicates that extra materials or readings are provided for additional context."
  color="rgb(46, 125, 50)"
  icon="Confirmation"
  type="mono"
  variant="filled"
  action-text="read more"
  action-icon="ExternalLink"
></vis-badge>

<vis-badge
  label="Missing Data"
  description="The source dataset is not complete, so some records may be missing because collecting and maintaining the full set is difficult."
  color="rgb(237, 108, 2)"
  icon="Warning"
  type="mono"
  variant="filled"
  action-text="definitions and notes"
  action-icon="ExternalLink"
></vis-badge>

<vis-badge
  label="Data Filtered"
  description="Indicates that data was included or excluded based on specific conditions or statuses."
  color="rgb(2, 136, 209)"
  icon="Info"
  type="mono"
  variant="filled"
></vis-badge>`,
    },
    {
        title: "Mini badges",
        helper: "",
        badges: [
            {
                label: "Open Data",
                description:
                    "Indicates that the visualization uses publicly accessible data, which can be downloaded, verified, or reused.",
                "action-text": "open dataset",
                "action-icon": "ExternalLink",
                color: "rgb(46, 125, 50)",
                icon: "Confirmation",
                type: "mini",
                variant: "filled",
                interactive: "true",
            },
            {
                label: "Missing Data",
                description:
                    "The source dataset is not complete, so some records may be missing because collecting and maintaining the full set is difficult.",
                "action-text": "definitions and notes",
                "action-icon": "ExternalLink",
                color: "rgb(237, 108, 2)",
                icon: "Warning",
                type: "mini",
                variant: "filled",
                interactive: "true",
            },
            {
                label: "Expand",
                description: "Open this view in full screen.",
                "action-text": "expand view",
                "action-icon": "Expand",
                color: "rgb(2, 136, 209)",
                icon: "Expand",
                type: "mini",
                variant: "filled",
                interactive: "true",
            },
        ],
        markup: `<vis-badge
  label="Open Data"
  description="Indicates that the visualization uses publicly accessible data, which can be downloaded, verified, or reused."
  color="rgb(46, 125, 50)"
  icon="Confirmation"
  type="mini"
  variant="filled"
  interactive="true"
  action-text="open dataset"
  action-icon="ExternalLink"
></vis-badge>

<vis-badge
  label="Missing Data"
  description="The source dataset is not complete, so some records may be missing because collecting and maintaining the full set is difficult."
  color="rgb(237, 108, 2)"
  icon="Warning"
  type="mini"
  variant="filled"
  interactive="true"
  action-text="definitions and notes"
  action-icon="ExternalLink"
></vis-badge>

<vis-badge
  label="Expand"
  description="Open this view in full screen."
  color="rgb(2, 136, 209)"
  icon="Expand"
  type="mini"
  variant="filled"
  interactive="true"
  action-text="expand view"
  action-icon="Expand"
></vis-badge>`,
    },
    {
        title: "Round badges",
        helper: "",
        badges: [
            {
                label: "No AI involved",
                description: "No AI tools were involved in producing this visualization.",
                color: "rgb(46, 125, 50)",
                icon: "badge-check",
                type: "round",
                variant: "solid",
                size: "64",
            },
            {
                label: "Expert authored",
                description: "Experts were involved in the data preparation and analysis.",
                "action-text": "read more",
                "action-icon": "ExternalLink",
                color: "rgb(46, 125, 50)",
                icon: "badge-check",
                type: "roundcirculartext",
                variant: "filled",
                size: "86",
                "ring-text": "Expert Authored",
                repeat: "2",
            },
            {
                label: "Key Metrics",
                description: "A compact summary of the most important figures in the current view.",
                color: "rgb(2, 136, 209)",
                icon: "Info",
                type: "round",
                variant: "solid",
                size: "64",
            },
        ],
        markup: `<vis-badge
  label="No AI involved"
  description="No AI tools were involved in producing this visualization."
  color="rgb(46, 125, 50)"
  icon="badge-check"
  type="round"
  variant="solid"
  size="64"
></vis-badge>

<vis-badge
  label="Expert authored"
  description="Experts were involved in the data preparation and analysis."
  color="rgb(46, 125, 50)"
  icon="badge-check"
  type="roundcirculartext"
  variant="filled"
  size="86"
  ring-text="Expert Authored"
  repeat="2"
  action-text="read more"
  action-icon="ExternalLink"
></vis-badge>

<vis-badge
  label="Key Metrics"
  description="A compact summary of the most important figures in the current view."
  color="rgb(2, 136, 209)"
  icon="Info"
  type="round"
  variant="solid"
  size="64"
></vis-badge>`,
    },
];

function SectionTitle({ children }) {
    return (
        <Typography variant="subtitle2" sx={{ fontWeight: 600, letterSpacing: "0.01em" }}>
            {children}
        </Typography>
    );
}

function CodeBlock({ children, minHeight = 0 }) {
    return (
        <Box
            component="pre"
            sx={{
                m: 0,
                p: 1.25,
                minHeight,
                overflowX: "auto",
                borderRadius: 1,
                bgcolor: "#f6f6f6",
                border: "1px solid",
                borderColor: "divider",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "0.76rem",
                lineHeight: 1.45,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
            }}
        >
            <Box component="code">{children}</Box>
        </Box>
    );
}

function PreviewPanel({ children, minHeight = 108 }) {
    return (
        <Box
            sx={{
                minHeight,
                p: 1.25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "#fafafa",
            }}
        >
            {children}
        </Box>
    );
}

function getSourceText(source) {
    if (source === "local") {
        return "Preview uses the local bundle.";
    }

    if (source === "hosted-pinned") {
        return "Preview uses a pinned hosted bundle.";
    }

    if (source === "hosted") {
        return "Preview uses the hosted fallback bundle.";
    }

    if (source === "existing") {
        return "Preview uses an existing vis-badge registration.";
    }

    return "Loading badge preview.";
}

function ExampleCard({ title, helper, badges, markup, isReady }) {
    return (
        <Grid item xs={12} md={4}>
            <Card elevation={0} sx={{ height: "100%", border: "1px solid", borderColor: "divider" }}>
                <CardContent
                    sx={{
                        p: 1.25,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        height: "100%",
                        "&:last-child": { pb: 1.25 },
                    }}
                >
                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {helper}
                        </Typography>
                    </Box>

                    <PreviewPanel minHeight={112}>
                        {isReady ? (
                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" justifyContent="center">
                                {badges.map((badge, index) =>
                                    React.createElement("vis-badge", {
                                        key: `${title}-${index}`,
                                        ...badge,
                                    })
                                )}
                            </Stack>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Loading preview...
                            </Typography>
                        )}
                    </PreviewPanel>

                    <CodeBlock minHeight={216}>{markup}</CodeBlock>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default function BadgeLibrary() {
    const { status, source, error } = useVisBadgeLibrary();
    const isReady = status === "ready";

    return (
        <Box sx={{ px: { xs: 1.5, md: 2.5 }, py: { xs: 2, md: 2.5 } }}>
            <Stack spacing={1.5}>
                {error ? (
                    <Alert severity="warning">
                        The badge library could not be loaded. This page tries the local
                        <code> /vis-badge.js </code>
                        bundle first and then falls back to the hosted bundle.
                    </Alert>
                ) : null}

                <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider" }}>
                    <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
                        <Stack spacing={1.25}>
                            <Box>
                                <SectionTitle>Usage</SectionTitle>
                                {/*<Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>*/}
                                {/*    Load the web component once, then place <code>&lt;vis-badge&gt;</code> where you*/}
                                {/*    need it.*/}
                                {/*</Typography>*/}
                            </Box>

                            <Grid container spacing={1.25} alignItems="stretch">
                                <Grid item xs={1} md={9}>
                                    <CodeBlock>{INSTALL_SNIPPET}</CodeBlock>
                                </Grid>
                                {/*<Grid item xs={12} md={4}>*/}
                                {/*    <Stack spacing={0.75} sx={{ height: "100%", justifyContent: "center" }}>*/}
                                {/*        <Button*/}
                                {/*            component="a"*/}
                                {/*            href={LOCAL_BUNDLE_URL}*/}
                                {/*            download="vis-badge.js"*/}
                                {/*            variant="outlined"*/}
                                {/*            size="small"*/}
                                {/*            sx={{ alignSelf: "flex-start", textTransform: "none" }}*/}
                                {/*        >*/}
                                {/*            Download vis-badge.js*/}
                                {/*        </Button>*/}
                                {/*        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>*/}
                                {/*            Use the hosted script above, or self-host the downloaded file instead.*/}
                                {/*        </Typography>*/}
                                {/*        <Typography variant="caption" color="text.secondary">*/}
                                {/*            {getSourceText(source)}*/}
                                {/*        </Typography>*/}
                                {/*    </Stack>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </Stack>
                    </CardContent>
                </Card>

                <Stack spacing={0.75}>
                    <SectionTitle>Examples</SectionTitle>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>
                    </Typography>
                    <Grid container spacing={1.25}>
                        {EXAMPLE_CARDS.map((example) => (
                            <ExampleCard key={example.title} {...example} isReady={isReady} />
                        ))}
                    </Grid>
                </Stack>
            </Stack>
        </Box>
    );
}
