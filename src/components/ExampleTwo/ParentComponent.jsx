import React from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";
// component houses other child components -- basic example
const ParentComponent = () => {
  const [salary, setSalary] = React.useState(0);
  const [age, setAge] = React.useState(33);

  const incrementAge = React.useCallback(() => {
    setAge((c) => c + 1);
  }, [setAge]);

  const incrementSalary = React.useCallback(() => {
    setSalary((s) => s + 1000);
  }, [setSalary]);

  console.log("Parent Component Render");
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increase Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increase Salary</Button>
    </div>
  );
};

export default ParentComponent;
