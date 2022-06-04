import React from "react";
import { Test } from "../components/ExampleOne/Test";
import { Box } from "../components/ExampleOne/Box";

const ExampleOne = () => {
  const [count, setCount] = React.useState(0);
  const numbers = [40, 55, 70];

  /** this works fine -- but we can pass a param like shown below */
  // const increment = useCallback(() => {
  //   setCount((c) => c + 1);
  // }, [setCount]);

  const increment = React.useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <p>{count}</p>
      <Test increment={increment} />
      {numbers.map((n) => {
        return <Box key={n} n={n} increment={increment} />;
      })}
    </div>
  );
};

export default ExampleOne;

/** 
 *  these will still cause a re-render even with the memoized component
 *  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

 *  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [count, setCount]);
 */
