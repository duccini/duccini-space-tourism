import { ReactNode } from "react";

import Menu from "../Menu";

type Props = {
  children: ReactNode;
  backgroundImage: string;
};

export default function Container({ children, backgroundImage }: Props) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: `#0b0d17 url('${backgroundImage}') no-repeat center`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Menu />
      {children}
    </div>
  );
}
