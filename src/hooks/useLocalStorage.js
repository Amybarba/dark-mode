import React, { useState } from "react";

// build a function called useLocalStorage
// add key and initialValue as parameters for the hook

export const useLocalStorage = (key, initialValue) => {
  // set up state called storedValue
   const item = JSON.parse(window.localStorage.getItem(key));
  const [storedValue, setStoredValue] = useState(item || initialValue);

  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  }
  return [storedValue, setValue];
};

// Written in response to the readme instructions
// code not as clean as above
// import React, { useState } from "react";

// export const useLocalStorage = (key, initialValue) => {
//      const [storedValue, setStoredValue] = useState(() => {
// const item = window.localStorage.getItem(key);
// return item ? JSON.parse(item) : initialValue;
//      });
//  const setValue = value => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//     setStoredValue(value);
//   }
//   return [storedValue, setValue];
// };
