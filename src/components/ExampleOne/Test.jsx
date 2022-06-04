import React from "react";
import { useCountRenders } from "../../hooks/Render";

export const Test = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={() => increment(1)}>Increase</button>;
});
