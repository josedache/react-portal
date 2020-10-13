import React from "react";
import { usePortal } from "./PortalCtx";

export interface IPortalDest {
  gate: string;
}

export function PortalDest({ gate }: IPortalDest) {
  const { gates } = usePortal();
  return <React.Fragment>{gates[gate]}</React.Fragment>;
}
