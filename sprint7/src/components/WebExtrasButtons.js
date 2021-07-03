import classes from "./WebExtrasButtons.module.css";
import { useCallback } from "react";
const WebExtrasButtons = ({ setPageNum, setLangNum, className, counter }) => {
  const { pageNum, langNum } = counter;

  const increase = useCallback(() => {
    if (className === "pages") {
      setPageNum((prev) => prev + 1);
    } else {
      setLangNum((prev) => prev + 1);
    }
  }, [setPageNum, setLangNum, className, pageNum, langNum]);

  const decrease = useCallback(() => {
    if (className === "pages") {
      setPageNum((prev) => prev - 1);
    } else {
      setLangNum((prev) => prev - 1);
    }
  }, [setPageNum, setLangNum, className, pageNum, langNum]);

  return (
    <div className={classes.container}>
      <button type="button" className={classes.button} onClick={increase}>
        +
      </button>
      <div className={classes.counter}>{counter}</div>
      <button type="button" className={classes.button} onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default WebExtrasButtons;
//prop
//props.pageNum
//onClick={props.increaseCounter}
//onClick={props.decreaseCounter}

/* 
  useEffect(() => {
    increase();
    decrease();
  }, [pageNum, langNum, increase, decrease]);
  setPageNum, setLangNum, pageNum, langNum
*/

/*
import React, { useCallback } from 'react';

function MyComponent() {
  const handleClick = useCallback(() => {
    // handle the click event
  }, []);

  return <MyChild onClick={handleClick} />;
}

*/
