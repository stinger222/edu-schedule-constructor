import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RootStore from './stores/RootStore';

const rootStore = new RootStore()
export const StoreContext = React.createContext(rootStore)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
		<StoreContext.Provider value={rootStore}>
    	<App />
		</StoreContext.Provider>

  </React.StrictMode>
)
