declare module "*.scss" {
  const content: { readonly [className: string]: string };
  export = content;
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
