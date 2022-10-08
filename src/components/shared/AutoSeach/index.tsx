import React from "react";

import DynamicIcons from "../DynamicIcons";

type Props = {
  children: React.ReactNode;
};

export const Span = () => (
  <span className="absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 sm:inline-flex inline-flex text-oldsilver-400">
    <DynamicIcons className="bi bi-search" color="#7a260a" iconName="FaSearch" size={20} />
  </span>
);

export const ComboBox = () => (
  <div style={{position: "relative", textAlign: "left"}}>
    <input
      autoComplete="off"
      className="w-full h-12 border border-oldsilver-300 py-2 pl-10 pr-7 text-xl outline-none rounded text-oldsilver-800 placeholder-oldsilver-400"
      list="opts"
      placeholder="myplaceholder"
      style={{position: "relative", zIndex: 1, backgroundColor: "transparent"}}
      type="text"
    />
    <datalist id="opts">
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </datalist>
  </div>
);

export const Container: React.FC<Props> = ({children}) => (
  <div className="relative w-11/12 sm:w-6/12">{children}</div>
);

export const SeachInput = () => (
  <Container>
    <Span />
    <ComboBox />
  </Container>
);
