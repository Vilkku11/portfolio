import React from "react";

const motionProxy = new Proxy(
  {},
  {
    get: (_, tag: string) => {
      return React.forwardRef<any, any>((props, ref) => {
        const { children, ...rest } = props;
        const Component = tag as keyof JSX.IntrinsicElements;
        return (
          <Component ref={ref} {...rest}>
            {children}
          </Component>
        );
      });
    },
  },
);

export const motion = motionProxy;

export const AnimatePresence = ({ children }: any) => <>{children}</>;

export const useScroll = () => ({
  scrollYProgress: { get: () => 0 },
});
