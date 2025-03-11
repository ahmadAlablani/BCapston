import React from "react";

const sizes = {
  text6xl: "text-[30px] font-medium lg:text-[30px] md:text-[28px] sm:text-[25px]",
  headingxs: "text-[18px] font-bold sm:text-[15px]",
  headings: "text-[20px] font-semibold sm:text-[17px]",
  headingmd: "text-[50px] font-semibold lg:text-[50px] md:text-[46px] sm:text-[42px]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";
  return (
    <Component className={`text-white-a700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };