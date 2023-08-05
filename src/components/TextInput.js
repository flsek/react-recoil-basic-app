import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../App";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const hadleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input value={text} onChange={hadleChange} />
      Echo: {text}
    </div>
  );
};

export default TextInput;
