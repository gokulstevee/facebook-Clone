import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import SideBar from "./components/Sidebar";
import Widgets from "./components/Widgets";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <div>
          <Login />
        </div>
      ) : (
        <>
          <div className="app">
            <Header />
            <div className="app__body">
              <SideBar />
              <Feed />
              <Widgets />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
