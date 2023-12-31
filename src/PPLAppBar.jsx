import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function PPLAppBar({ gernerateWorkout }) {
  // Open / Close Menus in AppBar
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        id="appbar"
        sx={{ backgroundColor: "steelblue" }}
      >
        <Toolbar>
          <IconButton
            id="icon-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "icon-button",
            }}
          >
            <MenuItem onClick={handleClose}>TBD</MenuItem>
            <MenuItem onClick={handleClose}>TBD</MenuItem>
            <MenuItem onClick={handleClose}>TBD</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Push Pull Legs
          </Typography>
          <Button
            sx={{ ml: 2 }}
            color="inherit"
            onClick={() => gernerateWorkout()}
          >
            Quick PPL
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
