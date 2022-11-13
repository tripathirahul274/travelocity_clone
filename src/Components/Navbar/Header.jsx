import React from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Store/Action";


import "./drawer.css";


import DrawerComp from "./Drawer";
import Popover1 from "./Popover";
import TravelPopover1 from "./TravelPopover"
const Header = () => {

  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  // console.log(userName);

  const handleSignOut = () => {
    dispatch(logOut());
  }


  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const logo = "https://mir-s3-cdn-cf.behance.net/projects/404/e63af524155871.54f5963696762.jpg";

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#3f51b5", marginLeft: "auto" }} style={{ padding: "8px" }}>
        <Toolbar>

          <Link to="/"><img style={{ marginRight: '2vh' ,width:"150px",height:"100px"}}  src={logo} alt="" /></Link>

          <TravelPopover1 />
          {isMatch ? (
            <>


              <DrawerComp />
            </>
          ) : (
            <>
              <div id="rightbar">
                <div> Español</div>
                <div>List your property</div>
                <div>Support</div>
                <div>Trips</div>

              </div>


            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment >
  );
};

export default Header;
