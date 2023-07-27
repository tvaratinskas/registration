import React from "react";
import "./index.css";
import Logo from "./components/Logo";
import Image from "./components/Image";
import Text from "./components/Text";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="container">
      <div className="brand">
        <Logo />
        <Image />
        <Text />
      </div>
      <Form />
    </div>
  );
};

export default App;
