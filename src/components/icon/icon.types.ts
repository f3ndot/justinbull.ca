export type IconTypes = "externalLink" | "alert";
export interface IconProps extends React.SVGAttributes<SVGElement> {
  type: IconTypes;
  size?: "font" | "small";
}
