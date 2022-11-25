import './App.css'
import BottomBarComponent from "./bottombar/BottomBarComponent";
import TopBarComponent from "./topbar/TopBarComponent";
import ContentComponent from "./content/ContentComponent";

function App() {
  return (
    <div className="App">
      <TopBarComponent/>
      <ContentComponent/>
      <BottomBarComponent/>
    </div>
  );
}

export default App;
