import React, { useEffect } from "react";

export default function (ref: React.MutableRefObject<any>, closeFunction: () => void) {
  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeFunction();
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [ref]);
}
