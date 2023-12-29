import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import * as React from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Checkbox from "@mui/material/Checkbox";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function PPLWorkoutItem({ exercise, updateSet }) {
  const labelId = `checkbox-list-label-${exercise.id}`;

  //   Toggle open / close sub-lists
  const [open, setOpen] = React.useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={toggleOpen}>
        <ListItemIcon>
        {exercise.equipment === "bodyweight" ? <AccessibilityNewIcon /> : <FitnessCenterIcon />}
        </ListItemIcon>
        <ListItemText primary={exercise.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* Sub-list Item 1 */}
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemIcon>
              <LooksOneIcon />
            </ListItemIcon>
            <ListItemText primary={`x${exercise.reps}`} />
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={exercise.set1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                onChange={() => updateSet(exercise.id, "set1")}
              />
            </ListItemIcon>
          </ListItemButton>
          {/* Sub-list Item 2 */}
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemIcon>
              <LooksTwoIcon />
            </ListItemIcon>
            <ListItemText primary={`x${exercise.reps}`} />
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={exercise.set2}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                onChange={() => updateSet(exercise.id, "set2")}
              />
            </ListItemIcon>
          </ListItemButton>
          {/* Sub-list Item 3 */}
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemIcon>
              <Looks3Icon />
            </ListItemIcon>
            <ListItemText primary={`x${exercise.reps}`} />
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={exercise.set3}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                onChange={() => updateSet(exercise.id, "set3")}
              />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
