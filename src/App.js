import InColor from "./InColor";
import OutColor from "./OutColor";
import { useState } from "react"


function App() {
  const [value, setValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(false)

  return (
    <div className="App">
      <OutColor
        value={value}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InColor
        value={value}
        setValue={setValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
