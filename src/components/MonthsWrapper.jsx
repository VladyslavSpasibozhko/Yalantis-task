import React from "react";
import Month from "./Month";

const MonthsWrapper = ({ data }) => {

  const { monthNames = [], userGroup = {} } = data;

  return (
    <ul className="list-wrapper">
      {monthNames.map((name) => (
        <Month
          title={name}
          key={name}
          users={userGroup[name]}
        />
      ))}
    </ul>
  );
};

export default MonthsWrapper;
