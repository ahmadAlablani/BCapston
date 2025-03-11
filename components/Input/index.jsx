"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
};

const variants = {
  fill: {
    blue_gray_100: "bg-blue_gray-100 text-black-900_03",
    white_A700: "bg-white-a700 shadow-xs",
    gray_50_ed: "bg-gray-50_ed",
    deep_purple_50: "bg-deep_purple-50 text-indigo-a100",
    deep_purple_50_01: "bg-deep_purple-50_01 text-indigo-a100",
  },
};

const sizes = {
  lg: "h-[294px] px-5 text-[24px]",
  xs: "h-[36px] px-3 text-[17px]",
  sm: "h-[56px] pl-[26px] pr-3 text-[20px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "",
    },
    ref,
    ...restProps
  ) => {
    // ... rest of the component code
  }
);

return (
    <label
      className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && variants[variant][color]}`}
    >
      {!!prefix && prefix}
      {!!label && label}
      <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
      {!!suffix && suffix}
    </label>
  );



  
  
  Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["lg", "xs", "sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf([
      "blue_gray_100",
      "white_A700",
      "gray_50_ed",
      "deep_purple_50",
      "deep_purple_50_01",
    ]),
  };
  
  export { Input };