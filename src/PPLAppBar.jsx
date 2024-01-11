import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PPLOptionsMenu from "./PPLOptionsMenu";

export default function PPLAppBar({ generateWorkout, toggleBodyweightOnly, bodyweightOnly }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        id="appbar"
        sx={{ backgroundColor: "steelblue" }}
      >
        <Toolbar>
          <PPLOptionsMenu
            toggleBodyweightOnly={toggleBodyweightOnly}
            bodyweightOnly={bodyweightOnly}
          />
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
