import React from "react";

export const AnimatePresence = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export const motion = {
  div: React.forwardRef<HTMLDivElement, any>((props, ref) => (
    <div ref={ref} {...props} />
  )),
  span: React.forwardRef<HTMLSpanElement, any>((props, ref) => (
    <span ref={ref} {...props} />
  )),
};
