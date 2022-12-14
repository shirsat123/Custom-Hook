import { useState } from "react";
//hooks & custom hooks in react starts with use keyword.

export default function useInput(defaultValue, charLimit) {
  const [value, setValue] = useState(defaultValue);
  const binder = {
    value: value,
    onChange: (e) => {
      if (e.target.value.length <= charLimit) {
        setValue(e.target.value);
      }
    }
  };
  return [value, binder];
}
