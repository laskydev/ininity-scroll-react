import React, { useState } from "react";
import copy from 'copy-to-clipboard'

const randomColor = require("randomcolor");

export const Square = React.memo(({ setCopied }) => {
  const color = randomColor();

  const handleClick = () => {
    setCopied(true);
    copy(color);
    setTimeout(() => setCopied(false), 800);
  };
  return (
    <div
      style={{
        height: "10vh",
        display: "flex",
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <p
          className={'hex'}
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          color: "white",
          backgroundColor: " rgba(0, 0, 44, 0.4",
          padding: "1px",
        }}
      >
        {color}
      </p>
    </div>
  );
});
