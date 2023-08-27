import React, { useState } from "react";

type returnType = [
  value: string,
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  setValue: React.Dispatch<React.SetStateAction<string>>
];
const useInput = (initialValue: string = ""): returnType => {
  const [value, setValue] = useState<string>(initialValue);

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handler, setValue];
};

export default useInput;
