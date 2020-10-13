import React, { useEffect } from "react";
import { usePortal } from "./PortalCtx";

export interface IPortalGateProps {
  name: string;
  teleport: boolean;
  children: JSX.Element;
}

export function PortalGate(props: IPortalGateProps) {
  const { name, teleport: travel, children } = props;
  const { teleport, close } = usePortal();

  useEffect(() => {
    if (travel && children) {
      teleport(name, children);
    } else {
      close(name);
    }
  }, [name, travel, children]);

  return null;
}

PortalGate.defaultProps = {
  teleport: true,
};

export default PortalGate;
