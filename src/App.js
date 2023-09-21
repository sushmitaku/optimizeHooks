import "./styles.css";
import { useState, useMemo, useCallback } from "react";
import Child from "./Child";
export default function App() {
  const [count, setCount] = useState(0);
  let array = useMemo(() => {
    return [5, 7, 8];
  }, []);

  const handleButtonClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <h3>Count :{count}</h3>
      <Child getArray={array} onClick={handleButtonClick} />
    </div>
  );
}
