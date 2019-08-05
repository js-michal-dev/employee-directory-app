import { useState } from "react";

export default (initialState = "") => {
  const [value, setValue] = useState(initialState);
  const setInputValue = e => setValue(e.target.value);
  return [value, setInputValue];
};
