import { useState  } from "react";
import "./App.css";

import MacPage from "./components/MacOsPage/MacPage";
import WinPage from "./components/WindowsPage/WinPage";

const App = () => {


  const [ showSecondPage, setShowSecondPage] = useState(false);

  const handleClick = () => {
  setShowSecondPage(!showSecondPage);

  };

  return(
    <div>
        {showSecondPage ? (
          <WinPage handleClick={handleClick}/>
        ):(
          <MacPage handleClick={handleClick}/>
        )}
    </div>
  );
};

export default App;
