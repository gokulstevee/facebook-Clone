import { useContext } from "react";
import "../styles/MainPage.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import SideBar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";
import { UserContext } from "../context/Context";

const MainPage = () => {
  // const [{ user }, dispatch] = useStateValue();
  const { state } = useContext(UserContext);
  // const user = "gokul";
  return (
    console.log(state.user),
    <div className="main">
      {!state.user ? (
        <div>
          <Login />
        </div>
      ) : (
        <>
          <div className="main">
            <Header />
            <div className="main__body">
              <SideBar />
              <Feed />
              <Widgets />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
