import React from "react";

import avatar from '../../../assets/default-avatar.svg'
export function Person({ name, nickName = "shakeAnd Bake", images }) {
  // const img = images && images[0] && images[0].small && images[0].small.url;

  //now let see the same with optional chaining.

  const img=images?.[0]?.small?.url ?? avatar

  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4 key={name}>{name}</h4>
      <p> Nick Names: {nickName}</p>
    </div>
  );
}
