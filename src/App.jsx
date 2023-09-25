import React from "react";
import Counter from "./Counter";
import Form from "./Form";

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Counter val={0} />
      <Form />
    </>
  );
};
export default App;
