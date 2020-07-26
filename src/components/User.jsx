import React from "react";

const User = ({ user }) => {
  const { firstName, lastName, dob } = user;
  return (
    <div className='list-item-inner-item'>
      <span>{firstName} {lastName}</span>
      <span>{dob}</span>
    </div>
  );
};

export default User;
