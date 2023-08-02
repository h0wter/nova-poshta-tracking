import { Global } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <h1>Tracking</h1>
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
