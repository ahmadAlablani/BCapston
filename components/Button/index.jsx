import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[32px]",
};

const variants = {
  fill: {
    blue_600_01: "bg-blue-680_01 text-white-a700",
    white_A700: "bg-white-a700",
    gray_100: "bg-gray-100 text-black-900_03",
    indigo_500: "bg-indigo-500 shadow-md text-white-a700",
    blue_600: "bg-blue-600 text-white-a700",
  },
};

const sizes = {
  "3xl": "h-[114px] px-[34px] text-[25px]",
  md: "h-[48px] px-1.5",
  xl: "h-[58px] px-[34px] text-[16px]",
  sm: "h-[36px] pl-2 pr-[34px] text-[16px]",
  xs: "h-[36px] px-[34px] text-[20px]",
  lg: "h-[54px] px-5 text-[36px]",
  "2xl": "h-[66px] px-[34px] text-[36px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "2xl",
  color = "",
  ...restProps
}) => {
  // ... (rest of the component code)
};

return (
<button
  className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap`}
  {...restProps}
>
  {!!leftIcon && leftIcon}
  {children}
  {!!rightIcon && rightIcon}
</button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["3xl", "md", "xl", "sm", "xs", "lg", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_600_01", "white_A700", "gray_100", "indigo_500", "blue_600"]),
};

export { Button };