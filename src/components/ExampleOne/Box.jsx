import React from "react";
import { useCountRenders } from "../../hooks/Render";

export const Box = React.memo(({ n, increment }) => {
  useCountRenders();

  return <button onClick={() => increment(n)}>{n}</button>;
});
