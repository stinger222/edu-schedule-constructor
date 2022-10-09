import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./components/GlobalStyles";
import Main from "./components/pages/Main/Main";

function App() {
  return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Main/>
		</ThemeProvider>
  )
}

export default App;
