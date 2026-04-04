import { useEffect, useState } from "react";

const DEFAULT_BASE_URL = "https://vedelsbrunner.github.io/badge-lib/dist-wc";

let loadPromise = null;

function addCacheBust(url) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}v=${Date.now()}`;
}

function getBundleUrls() {
    const baseUrl = (process.env.REACT_APP_VIS_BADGE_WC_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, "");
    const pinnedFile = (process.env.REACT_APP_VIS_BADGE_WC_FILE || "").trim();
    const alwaysLive = process.env.REACT_APP_VIS_BADGE_ALWAYS_LIVE === "true";
    const publicBase = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");
    const localUrl = publicBase ? `${publicBase}/vis-badge.js` : "/vis-badge.js";
    const pinnedUrl = pinnedFile ? `${baseUrl}/${pinnedFile}` : "";
    const latestUrl = `${baseUrl}/vis-badge.js`;
    const shouldBustCache = process.env.NODE_ENV === "development" || alwaysLive;
    const urlsToTry = [];

    function pushUrl(url, source) {
        if (!url) {
            return;
        }

        urlsToTry.push({
            source,
            url: shouldBustCache ? addCacheBust(url) : url,
        });
    }

    // Prefer the vendored bundle so the app still works if badge-lib is unavailable.
    pushUrl(localUrl, "local");
    pushUrl(pinnedUrl, "hosted-pinned");
    pushUrl(latestUrl, "hosted");

    return urlsToTry;
}

export async function registerVisBadgeLibrary() {
    if (customElements.get("vis-badge")) {
        return {
            source: "existing",
            url: null,
        };
    }

    if (!loadPromise) {
        loadPromise = (async () => {
            const urlsToTry = getBundleUrls();
            let lastError = null;

            for (const candidate of urlsToTry) {
                try {
                    await import(/* webpackIgnore: true */ candidate.url);

                    if (customElements.get("vis-badge")) {
                        return candidate;
                    }
                } catch (error) {
                    lastError = error;
                    console.warn(`[vis-badge] Failed to import ${candidate.url}`, error);
                }
            }

            const error = new Error(
                `[vis-badge] Could not load the badge library bundle. Tried:\n- ${urlsToTry
                    .map((candidate) => candidate.url)
                    .join("\n- ")}`
            );
            error.cause = lastError;
            throw error;
        })().catch((error) => {
            loadPromise = null;
            throw error;
        });
    }

    return loadPromise;
}

export default function useVisBadgeLibrary() {
    const [state, setState] = useState(() => {
        if (customElements.get("vis-badge")) {
            return {
                status: "ready",
                source: "existing",
                url: null,
                error: null,
            };
        }

        return {
            status: "loading",
            source: null,
            url: null,
            error: null,
        };
    });

    useEffect(() => {
        let isMounted = true;

        registerVisBadgeLibrary()
            .then((result) => {
                if (!isMounted) {
                    return;
                }

                setState({
                    status: "ready",
                    source: result.source,
                    url: result.url,
                    error: null,
                });
            })
            .catch((error) => {
                if (!isMounted) {
                    return;
                }

                setState({
                    status: "error",
                    source: null,
                    url: null,
                    error,
                });
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return state;
}
