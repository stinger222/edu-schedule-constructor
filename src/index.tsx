import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './core/themes/GlobalStyles';
import RootStore from './core/store/RootStore';

const rootStore = new RootStore()
export const StoreContext = React.createContext<typeof rootStore>(rootStore)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
		<StoreContext.Provider value={rootStore}>
			<GlobalStyles />
			<App />
		</StoreContext.Provider>
  </React.StrictMode>
);
