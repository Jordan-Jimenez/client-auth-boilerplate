import React, { FC } from "react";
import ITextProps from "./textProps";

const Text: FC<ITextProps> = ({ color }) => {
  return <p style={{ color: color }}>Hello World</p>;
};

export default Text;
