import React from 'react';
import BinaryBadge from "./BinaryBadge";
import OrdinalBadge from "./OrdinalBadge";
import QuantitativeBadge from "./QuantitativeBadge";
import CategoricalBadge from "./CategoricalBadge";

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


