import React from "react";

const Clourses = ({ fillColor = "", className = "", ...props }) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      height={props.dim || 20}
      width={props.dim || 20}
      viewBox={`0 0 ${props.dim || 20} ${props.height || props.dim || 20}`}
      path={`M 9.1 1.36988 1.36988 9.1 1.78988 10.1 10.1 1.78988 18.3 10.1 17.2101 9.1 10.1 1.36988 18.3 1.36988 17.2101 1.78988 10.1 10.1 1.78988 1.36988 9.1 9.1 1.36988 Z`}
    />
  );
};

export { Clourses };