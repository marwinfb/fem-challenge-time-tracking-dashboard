import { useState } from "react";
import Dashboard from "./components/Dashboard";
import data from "../src/assets/data/data.json";

const App = () => {
  const [frequency, setFrequency] = useState("weekly");
  const [isActive, setIsActive] = useState(true);

  const handleClick = (title) => {
    setFrequency(title.toLowerCase());
    setIsActive(true);
  }

  return (
    <div className="max-w-7xl mx-auto min-h-screen p-6 flex items-center justify-center">
      <Dashboard handleClick={handleClick} frequency={frequency} isActive={isActive} data={data} />
    </div>
  );
};

export default App;
