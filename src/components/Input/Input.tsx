import React, { useEffect, useRef } from "react";
import "./styles.css";
const Input = ({ onChange, value }: { onChange: any; value: string }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      if (ref.current.focus) {
        ref.current.classList.add("focus");
      }
    }
  }, []);
  if (value?.length < 3) {
    if (ref.current) ref.current.classList.add("error");
  } else {
    ref.current.classList.remove("error");
  }

  const onBlur = () => {
    if (ref.current) {
      ref.current.classList.remove("focus");
    }
  };
  const onFocus = () => {
    if (ref.current) {
      ref.current.classList.add("focus");
    }
  };
  return (
    <div>
      <input
        onFocus={onFocus}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="input border-2 border-black pl-5 w-full w-100"
        type="text"
      />
    </div>
  );
};

export default Input;
