import React from "react";
import ExternalLinkSvg from "./icon.external-link.inline.svg";
import { IconProps } from "./icon.types";

const svgStyle: React.CSSProperties = {
  verticalAlign: "middle",
  flexShrink: 0,
};

export const Icon = ({ type, size, style, ...props }: IconProps) => {
  let svgSize;
  if (size === "small") {
    svgSize = "0.8em";
  } else if (size === "font") {
    svgSize = "1em";
  }

  switch (type) {
    case "externalLink":
      return (
        <ExternalLinkSvg
          role="img"
          aria-label="External link"
          style={{ ...svgStyle, ...style }}
          {...props}
          width={svgSize}
          height={svgSize}
        />
      );
    case "alert":
      return <></>;
    default:
      return <></>;
  }
};
