import React from "react";
import User from "./User";

const UsersWrapper = ({ users }) => {

  return (
    <div className='list-item-inner'>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersWrapper;
