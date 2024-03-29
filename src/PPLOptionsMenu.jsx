import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function PPLOptionsMenu({
  toggleBodyweightOnly,
  bodyweightOnly,
}) {
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
    <>
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
          <DialogTitle id="dialog-title" sx={{ pt: 4, textAlign: "center" }}>
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
    </>
  );
}
