import React from "react";

export default function User(props) {
  const { user } = props;
  return (
    <div className="display:flex">
      <p className="button">{user.name}</p>
      <p>{user.age}</p>
      <p>{user.gender}</p>
    </div>
  );
}
