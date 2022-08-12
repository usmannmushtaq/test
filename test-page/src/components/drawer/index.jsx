import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import MenuIcon from "@mui/icons-material/Menu";
export default function Index() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "#212530", color: "#fff", height: "100%" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <ArrowBackTwoToneIcon
          style={{
            marginRight: "30px",
            marginLeft: "15px",
            backgroundColor: "#2e2e2e",
            borderRadius: "5px ",
          }}
        />
        <p style={{ textAlign: "center", color: "#eeeeee" }}>Settings</p>
      </div>

      {/* <Toolbar /> */}
      {/* <Divider /> */}
      <List>
        <p style={{ paddingLeft: "18px", color: "#eeeeee" }}>ORGANIZATION</p>
        {["Accounts", "Users", "Subscription", "Usage report"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <BusinessIcon style={{ color: "#eeeeee" }} />
                  ) : (
                    <PeopleOutlineOutlinedIcon style={{ color: "#eeeeee" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      {/* <Divider /> */}
      <p style={{ paddingLeft: "18px", color: "#eeeeee" }}>ACCOUNT SETTING</p>

      <List>
        {["Notification", "Integrations"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <MarkChatUnreadOutlinedIcon style={{ color: "#eeeeee" }} />
                ) : (
                  <IntegrationInstructionsOutlinedIcon
                    style={{ color: "#eeeeee" }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <p style={{ paddingLeft: "18px", color: "#eeeeee" }}>ACCOUNT SETTING</p>

      <List>
        {["Profile"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon style={{ color: "#eeeeee" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div
        style={{
          height: "50px",
          width: "100%",
          alignItems: "center",
          display: "flex",
          paddingLeft: "35px",
        }}
      >
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button>{anchor}</Button> */}
            <MenuIcon
              style={{ color: "#fff" }}
              onClick={toggleDrawer(anchor, true)}
            />

            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
