import React, { useEffect } from "react";

export default function useCloseOnOutSideClick(
  ref: React.MutableRefObject<any>,
  closeFunction: () => void
): void {
  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeFunction();
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [closeFunction, ref]);
}
