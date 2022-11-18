import React from "react";

const Like = ({liked}) => {
    liked = true;
  return (
    <div>{liked?'❤️':'🖤'}</div>
  );
};

export default Like;
