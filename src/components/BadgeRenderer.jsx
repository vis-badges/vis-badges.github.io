// BadgeRenderer.jsx
import React from 'react';
import BinaryBadge from "../components/BinaryBadge";
import OrdinalBadge from "../components/OrdinalBadge";
import QuantitativeBadge from "../components/QuantitativeBadge";
import CategoricalBadge from "../components/CategoricalBadge";

export default function BadgeRenderer({
                                          badge,
                                          size,
                                          variant,
                                          chipColor,
                                          renderProps = {},
                                          forwardedRef,
                                      }) {
    const commonProps = { badge, size, variant, chipColor, ...renderProps };

    switch (badge.badgeType) {
        case "ORDINAL":
            return <OrdinalBadge ref={forwardedRef} {...commonProps} />;
        case "QUANTITATIVE":
            return <QuantitativeBadge ref={forwardedRef} {...commonProps} />;
        case "CATEGORICAL":
            return <CategoricalBadge ref={forwardedRef} {...commonProps} />;
        default:
            return <BinaryBadge ref={forwardedRef} {...commonProps} />;
    }
}
