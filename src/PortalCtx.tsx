import React, { createContext, useCallback, useContext, useState } from "react";

export interface IPortalProps {
  gates: { [key: string]: JSX.Element };
  teleport: (name: string, element: JSX.Element) => void;
  close: (name: string) => void;
}

export const PortalCtx = createContext<IPortalProps>(null!);

export const { Consumer: PortalConsumer, Provider } = PortalCtx;

export function PortalProvider(props: { children: JSX.Element }) {
  const [gates, setGates] = useState<IPortalProps["gates"]>({});

  const teleport: IPortalProps["teleport"] = (name, element) => {
    setGates((p) => ({ ...p, [name]: element }));
  };

  const close: IPortalProps["close"] = (name) => {
    setGates((p) => {
      const previous = { ...p };
      delete previous[name];
      return previous;
    });
  };

  return (
    <Provider value={{ gates, teleport, close }}>{props.children}</Provider>
  );
}

export function usePortal() {
  return useContext(PortalCtx);
}

export default PortalCtx;
