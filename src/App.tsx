import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./style/GlobalStyle";
import {theme} from "./theme";
import {HomePage} from "./pages/HomePage/HomePage";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
