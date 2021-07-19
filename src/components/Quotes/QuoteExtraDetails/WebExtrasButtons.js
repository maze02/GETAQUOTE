import classes from "./WebExtrasButtons.module.css";
import { useCallback } from "react";
import infoIcon from "../../../images/info.svg";

const WebExtrasButtons = ({
  setPageNum,
  setLangNum,
  className,
  counter,
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
  }, [setPageNum, setLangNum, className]);

  const decrease = useCallback(() => {
    if (className === "pages") {
      setPageNum((prev) => (prev > 1 ? prev - 1 : prev));
    } else {
      setLangNum((prev) => (prev > 1 ? prev - 1 : prev));
    }
  }, [setPageNum, setLangNum, className]);

  const handleInfo = useCallback(
    (e) => {
      if (e.target.id === "pages") {
        if (modalLangOpen) {
          setModalLangOpen(false);
        }
        if (!modalPageOpen) {
          setModalPageOpen((prevS) => true);
        } else {
          setModalPageOpen((prevS) => false);
        }
      }
      if (e.target.id === "languages") {
        if (modalPageOpen) {
          setModalPageOpen(false);
        }
        if (!modalLangOpen) {
          setModalLangOpen((prevS) => true);
        } else {
          setModalLangOpen((prevS) => false);
        }
      }
    },
    [setModalLangOpen, setModalPageOpen, modalPageOpen, modalLangOpen]
  );

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
