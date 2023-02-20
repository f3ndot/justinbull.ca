import React from "react";
import { Icon } from "../icon";
import { IconProps } from "../icon/icon.types";

interface ExternalAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  linkIcon?: boolean;
  iconSize?: IconProps["size"];
}

export const ExternalA = ({
  href,
  children,
  linkIcon = true,
  iconSize,
  ...props
}: ExternalAProps) => {
  const icon = (
    <Icon
      type="externalLink"
      style={{ marginLeft: "2px" }}
      size={iconSize ?? "small"}
    />
  );
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
        {linkIcon && icon}
      </a>
      {!linkIcon && icon}
    </>
  );
};
