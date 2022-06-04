import React from "react";

const Title = () => {
  console.log("Title Component Render");
  return <h2>Use Callback Hook</h2>;
};

export default React.memo(Title);
