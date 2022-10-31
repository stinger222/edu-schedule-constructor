import { HashRouter, Route, Routes } from "react-router-dom";
import GlobalStyles, { theme } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import ComposedSchedules from "./components/pages/ComposedSchedules/ComposedSchedules";
import Main from "./components/pages/Main/Main";
import RingSchedules from "./components/pages/RingSchedules/RingSchedules";

function App() {
  return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<HashRouter>
				<Routes>
					<Route path="/" element={<Main />}/>
					<Route path="/composed" element={<ComposedSchedules />}/>
					<Route path="/rings" element={<RingSchedules />}/>
				</Routes>
			</HashRouter>
		</ThemeProvider>
  )
}

export default App;
