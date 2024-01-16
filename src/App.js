import "./App.css";
import Sidebar from "./components/Sidebar";
import MainForm from "./components/MainForm";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="mainContainer">
        <div className="sideBarContainer">
          <Sidebar />
        </div>
        <div className="mainFormContainer">
          <MainForm />
        </div>
      </div>
    </>
  );
}

export default App;
