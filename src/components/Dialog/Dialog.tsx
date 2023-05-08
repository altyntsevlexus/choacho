import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

import * as styles from "./Dialog.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ isActive, setIsActive, children }: Props) => {
  const dialogContainerClassName = classNames(styles.dialogContainer, {
    [styles.dialogContainerActive]: isActive,
  });

  const handleDialogClose = (event) => {
    if (event.target === event.currentTarget) {
      setIsActive(false);
    }
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setIsActive(false);
      }
    },
    [setIsActive]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      className={dialogContainerClassName}
      onClick={handleDialogClose}
      onKeyDown={handleKeyDown}
      role="dialog"
    >
      <div className={styles.dialog}>
        {children}
        <button
          type="button"
          className={styles.close}
          onClick={handleDialogClose}
        >
          Закрити
        </button>
      </div>
    </div>,
    document.getElementById("___gatsby")
  );
};

export default Dialog;
