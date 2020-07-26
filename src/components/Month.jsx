import React, { useState } from "react";
import UsersWrapper from "./UsersWrapper";

const classes = (length) => {
  if (length <= 2) {
    return "grey";
  }
  if (length > 2 && length <= 6) {
    return "blue";
  }

  if (length > 6 && length <= 10) {
    return "green";
  }

  if (length > 10) {
    return "red";
  }
  return "";
};

const Month = ({ title, users }) => {
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseOut = () => {
    if (!disabled) {
      setShow(false);
    }
  };

  return (
    <>
      <li
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseOut}
        onClick={onClick}
        className={`list-item ${classes(users.length)}`}
      >
        {title}
        {show && <UsersWrapper users={users} />}
      </li>
    </>
  );
};

export default Month;
