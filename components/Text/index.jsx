import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal",
  texts: "text-[13px] font-normal",
  textmd: "text-[14px] font-normal",
  textlg: "text-[15px] font-normal",
  textxl: "text-[16px] font-normal sm:text-[13px]",
  text2xl: "text-[18px] font-normal sm:text-[15px]",
  text3xl: "text-[20px] font-normal sm:text-[17px]",
  text4xl: "text-[22px] font-normal lg:text-[22px] sm:text-[18px]",
  text5xl: "text-[24px] font-normal lg:text-[24px] md:text-[22px] sm:text-[20px]",
  text7xl: "text-[32px] font-normal lg:text-[32px] md:text-[30px] sm:text-[27px]",
  text8xl: "text-[36px] font-normal lg:text-[36px] md:text-[34px] sm:text-[30px]",
  text9xl: "text-[38px] font-normal lg:text-[38px] md:text-[36px] sm:text-[32px]",
  text10xl: "text-[48px] font-normal lg:text-[48px] md:text-[44px] sm:text-[40px]",
  text11xl: "text-[60px] font-normal lg:text-[60px] md:text-[52px] sm:text-[51px]",
  text12xl: "text-[64px] font-normal lg:text-[64px] md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "text2xl", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component className={`text-white-a700 font-daysone ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };