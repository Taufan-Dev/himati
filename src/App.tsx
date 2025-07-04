import { useState } from "react";
import "./App.css";
import { Title } from "./componets/text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title text="Menu Menu Rajanya Ayam" />
    </>
  );
}

export default App;
