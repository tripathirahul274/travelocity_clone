import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Button,
} from "@mui/material";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./drawer.css";

const pages = ["SignUp", "Login", "List your property", "Trip"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <div>
        <CardTravelIcon color="white" aria-describedby={id} variant="contained" onClick={handleClick} />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}

        >
          <div id="signinPopover">
            <div id="userProfile">
              <div id="signinHeader" >Members can access discounts and special features</div>
              <Button variant="contained" fullWidth={true} >Sign in</Button>
              <div id="createAcc">Create a free account</div>
            </div>
            <div id="favrt">List of favorites</div>
            <div id="feedback">feedback</div>
          </div>
        </Popover>
      </div>
      <IconButton
        sx={{ color: "white", marginLeft: 0 }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >

        <AccountCircleIcon sx={{ color: "white", marginLeft: 1 }} />

      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
