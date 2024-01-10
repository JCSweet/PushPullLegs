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
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function PPLAppBar({ generateWorkout, toggleBodyweightOnly, bodyweightOnly }) {
  // Open & Close AppBar Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Open Settings
  const [openSettings, setOpenSettings] = useState(false);
  

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
            aria-controls={open ? "options-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="options-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "icon-button",
            }}
          >
            <MenuItem onClick={() => setOpenSettings(true)}>Settings</MenuItem>
            <Dialog
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
              open={openSettings}
              onClose={() => setOpenSettings(false)}
            >
              <DialogTitle
                id="dialog-title"
                sx={{ pt: 4, textAlign: "center" }}
              >
                Settings
              </DialogTitle>
              <DialogContent>
                <FormGroup sx={{ p: 2 }}>
                  <FormControlLabel
                    control={<Switch />}
                    label="Bodyweight Only"
                    checked={bodyweightOnly}
                    onChange={() => toggleBodyweightOnly()}
                  />
                </FormGroup>
                <Button onClick={() => setOpenSettings(false)}>Close</Button>
              </DialogContent>
            </Dialog>
            <MenuItem onClick={handleClose}>TBD</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Push Pull Legs
          </Typography>
          <Button
            sx={{ ml: 2 }}
            color="inherit"
            onClick={() => generateWorkout()}
          >
            Quick PPL
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
