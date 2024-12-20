import React from "react";

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-3)",
  borderRightColor: "var(--color-4)",
  borderRadius: "50%",
  width: "var(--gap)",
  height: "var(--gap)",
  animation: "spin 1s infinite"
};

const Loading = () => {
  return <div style={style}></div>;
};

export default Loading;
