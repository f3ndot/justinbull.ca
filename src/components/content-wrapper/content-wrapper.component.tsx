import React from "react";
import "./content-wrapper.css";

interface ContentWrapperProps {
  contentSpacing?: "p0" | "p1" | "p2" | "p3" | "p4";
  horizontalOnly?: boolean;
  children: React.ReactNode;
}

const spacingPropToClassName = ({
  contentSpacing,
  horizontalOnly,
}: Pick<ContentWrapperProps, "contentSpacing" | "horizontalOnly">) =>
  contentSpacing
    ? `content-wrapper--u-spacing-${contentSpacing}${
        horizontalOnly ? "-h" : ""
      }`
    : "";

export const ContentWrapper = ({
  contentSpacing,
  horizontalOnly,
  children,
}: ContentWrapperProps) => (
  <div className="content-wrapper">
    <div
      className={`content-wrapper--inner ${spacingPropToClassName({
        contentSpacing,
        horizontalOnly,
      })}`}
    >
      {children}
    </div>
  </div>
);
