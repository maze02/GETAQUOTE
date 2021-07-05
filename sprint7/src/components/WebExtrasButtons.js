import classes from "./WebExtrasButtons.module.css";
import { useCallback } from "react";
import infoIcon from "../images/info.svg";

const WebExtrasButtons = ({
  setPageNum,
  setLangNum,
  className,
  counter,
  setQuote,
  modalPackage,
  id,
}) => {
  const { pageNum, langNum } = counter;
  const { setModalLangOpen, setModalPageOpen, modalLangOpen, modalPageOpen } =
    modalPackage;

  const increase = useCallback(() => {
    if (className === "pages") {
      setPageNum((prev) => prev + 1);
    } else {
      setLangNum((prev) => prev + 1);
    }
    /* setQuote([...{ pageNum: pageNum }, { langNum: langNum }]);*/
  }, [setPageNum, setLangNum, className, pageNum, langNum]);

  const decrease = useCallback(() => {
    if (className === "pages") {
      setPageNum((prev) => (prev > 1 ? prev - 1 : prev));
    } else {
      setLangNum((prev) => (prev > 1 ? prev - 1 : prev));
    }
    /*setQuote([...{ pageNum: pageNum }, { langNum: langNum }]);*/
  }, [setPageNum, setLangNum, className, pageNum, langNum]);

  const handleInfo = useCallback(
    (e) => {
      console.log("I'm clicking on icon and id is " + e.target.id);
      if (e.target.id === "pages") {
        console.log("I'm clicking on the pages icon and id is " + e.target.id);
        if (modalLangOpen) {
          setModalLangOpen(false);
        }
        console.log("printing value test: " + modalPageOpen);
        if (!modalPageOpen) {
          setModalPageOpen((prevS) => true);
          console.log("inside conditional1" + modalPageOpen);
        } else {
          setModalPageOpen((prevS) => false);
          console.log("inside conditional2");
        }
        //modalPageOpen ? setModalPageOpen(false) : setModalPageOpen(true);
        console.log("printing value test2: " + modalPageOpen);
      }
      if (e.target.id === "languages") {
        console.log(
          "I'm clicking on the languages icon and id is " + e.target.id
        );
        if (modalPageOpen) {
          setModalPageOpen(false);
        }
        if (!modalLangOpen) {
          setModalLangOpen((prevS) => true);
          console.log("inside conditional1" + modalLangOpen);
        } else {
          setModalLangOpen((prevS) => false);
          console.log("inside conditional2");
        }
        // modalLangOpen ? setModalLangOpen(false) : setModalLangOpen(true);
      }
    },
    [setModalLangOpen, setModalPageOpen, modalPageOpen, modalLangOpen]
  );

  /*
  const [modalLangOpen, setModalLangOpen] = useState(false);
  const [modalPageOpen, setModalPageOpen] = useState(false);

  const openModalHandler = () => {
    setModalIsOpen(true);
      };

      const closeModalHandler = () => {
        setModalIsOpen(false);
      };

  */
  return (
    <div className={classes.container}>
      <button type="button" className={classes.button} onClick={increase}>
        +
      </button>
      <div className={classes.counter}>{counter}</div>
      <button type="button" className={classes.button} onClick={decrease}>
        -
      </button>
      <img
        className={classes.info}
        src={infoIcon}
        alt="info-symbol"
        onClick={handleInfo}
        id={id}
      />
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
