import logo from "./logo.svg";
import "./App.css";
import Tower from "../src/components/hanoi/Tower";
import HomePageView from "./Views/HomePage/Home";

function App() {
  return (
    <div id="app" className="App">
      <HomePageView></HomePageView>
    </div>
  );
}

export default App;
