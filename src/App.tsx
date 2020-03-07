import React, { useState } from "react";
import "./App.css";

import { RangeInput } from "./components/RangeInput";

function App() {
  const [value, setValue] = useState<string | number>("10");
  return (
    <div className="App">
      <RangeInput name="test" value={value} onChange={setValue} />
    </div>
  );
}

export default App;
