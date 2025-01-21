import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container(props: ContainerProps) {
  const { children, className = "" } = props;
  return (
    <div
      className={`container mx-auto px-4 lg:px-10 3xl:w-[1300px] min-lg:w-[1300px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
