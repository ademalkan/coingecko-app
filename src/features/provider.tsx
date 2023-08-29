"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import type { ReactNode, JSX } from "react";

export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
