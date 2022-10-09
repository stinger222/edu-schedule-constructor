import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./components/GlobalStyles";
import Header from "./components/Header/Header";

function App() {
  return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header/>
		</ThemeProvider>
  )
}

export default App;
