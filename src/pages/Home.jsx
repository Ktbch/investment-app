import React, { useEffect } from "react";
import SideBar from "./Marketing.jsx/Header/SideBar";
import Dash from "../views/DashBoard/Dash";
import { CyptoMarket } from "../views/DashBoard/CyptoMarket";

function Home() {
  // const context = useUserContext();
  // const naviage = useNavigate();

  //   useEffect(
  // 		() => {
  //   if (!context.isLoggedIn) {
  //     naviage('/')
  //   }
  // },
  // 		[context.isLoggedIn]
  // 	)

  return (
    <div className="">
      <SideBar />
      <Dash />
      <CyptoMarket />
    </div>
  );
}

export default Home;
