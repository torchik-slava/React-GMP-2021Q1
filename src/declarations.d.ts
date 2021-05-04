declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.jpg" {
  import React = require("react");

  export const ReactComponent: React.SFC<any>;
  const src: string;
  export default src;
}
