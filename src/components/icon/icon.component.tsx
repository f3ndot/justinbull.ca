import React from "react";
import ExternalLinkSvg from "./icon.external-link.inline.svg";

type IconTypes = "externalLink" | "alert";
interface IconProps extends React.SVGAttributes<SVGElement> {
  type: IconTypes;
}

export const Icon = ({ type, ...props }: IconProps) => {
  switch (type) {
    case "externalLink":
      return (
        <ExternalLinkSvg role="img" aria-label="External link" {...props} />
      );
    case "alert":
      return <></>;
    default:
      return <></>;
  }
};
