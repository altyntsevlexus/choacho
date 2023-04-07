import React from "react";

import LogoImage from "images/logo-green.inline.svg";

interface Props {
  className?: string;
  size?: number;
}

const Logo = ({ className, size }: Props) => (
  <LogoImage className={className} width={size} height={size} />
);

export default Logo;
