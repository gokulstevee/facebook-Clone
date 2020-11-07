import MainPage from "./components/MainPage";
import "./App.css";
import { useReducer } from "react";
import reducer from "./reducer/reducer";
import { UserContext } from "./context/Context";

const initialUserState = {
  user: null,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialUserState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <MainPage />;
    </UserContext.Provider>
  );
};

export default App;

// import { useContext } from "react";
// import "./main.css";
// import Feed from "./components/Feed";
// import Header from "./components/Header";
// import Login from "./components/Login";
// import SideBar from "./components/Sidebar";
// import { useStateValue } from "./components/StateProvider";
// import Widgets from "./components/Widgets";
// import { UserContext } from "./context/Context";

// function App() {
//   // const [{ user }, dispatch] = useStateValue();
//   const [{ user }, dispatch] = useContext(UserContext);
//   // const user = null;
//   return (
//     <div className="main">
//       {!user ? (
//         <div>
//           <Login />
//         </div>
//       ) : (
//         <>
//           <div className="main">
//             <Header />
//             <div className="main__body">
//               <SideBar />
//               <Feed />
//               <Widgets />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
