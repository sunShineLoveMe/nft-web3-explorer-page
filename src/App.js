import { useEffect } from 'react';
import {Store} from './Store';
import './App.css'
import 'antd/dist/reset.css';
import BottomBarComponent from "./bottombar/BottomBarComponent";
import TopBarComponent from "./topbar/TopBarComponent";
import ContentComponent from "./content/ContentComponent";
import WalletComponent from './component/walletcomponent';


function App() {

  useEffect(() => {
    Store.registerAccountChange()
  }, [])

  return (
    <div className="App">
      <TopBarComponent/>
      <ContentComponent/>
      <BottomBarComponent/>
      <WalletComponent/>
    </div>
  );
}

export default App;
