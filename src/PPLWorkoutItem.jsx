import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Checkbox from "@mui/material/Checkbox";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';

export default function PPLWorkoutItem({
  exercise,
  updateSet,
  toggleWeightMode,
  increaseReps,
  decreaseReps,
}) {
  const labelId = `checkbox-list-label-${exercise.id}`;

  //   Toggle open / close Options
  const [openOptions, setOpenOptions] = React.useState(false);

  const toggleOpenOptions = () => {
    setOpenOptions(!openOptions);
  };

  return (
    <>
      {/* Exercise Header  */}
      <ListItem>
        <ListItemIcon onClick={() => toggleWeightMode(exercise.id)}>
          {exercise.bodyweight ? (
            <AccessibilityNewIcon />
          ) : (
            <FitnessCenterIcon />
          )}
        </ListItemIcon>
        <ListItemText primary={exercise.displayName} />
        <ListItemIcon>
          <SettingsIcon onClick={toggleOpenOptions} />
        </ListItemIcon>
      </ListItem>
      {/* Options Menu */}
      <Collapse in={openOptions} timeout="auto" unmountOnExit>
        <ListItem sx={{ pl: 10, pr: 10, textAlign: 'center', justifyContent: 'center', minWidth: 0, }}>
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 0, pl: 1, pr: 1 }}>
            <RemoveIcon onClick={() => decreaseReps(exercise.id)} />
          </ListItemIcon>
          <ListItemText sx={{ }} primary={"Set Reps"} />
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 0, pl: 1, pr: 1 }}>
            <AddIcon onClick={() => increaseReps(exercise.id)}/>
          </ListItemIcon>
        </ListItem>
      </Collapse>
      {/* Exercise Set List */}
      <List component="div" disablePadding>
        {/* Sub-list Item 1 */}
        <ListItem sx={{ pl: 10 }}>
          <ListItemIcon>
            <LooksOneIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              exercise.bodyweight
                ? `x${exercise.goalRepsBodyweight}`
                : `x${exercise.goalRepsWeight}`
            }
          />
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={exercise.set1Complete}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": labelId }}
              onChange={() => updateSet(exercise.id, "set1")}
            />
          </ListItemIcon>
        </ListItem>
        {/* Sub-list Item 2 */}
        <ListItem sx={{ pl: 10 }}>
          <ListItemIcon>
            <LooksTwoIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              exercise.bodyweight
                ? `x${exercise.goalRepsBodyweight}`
                : `x${exercise.goalRepsWeight}`
            }
          />
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={exercise.set2Complete}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": labelId }}
              onChange={() => updateSet(exercise.id, "set2")}
            />
          </ListItemIcon>
        </ListItem>
        {/* Sub-list Item 3 */}
        <ListItem sx={{ pl: 10 }}>
          <ListItemIcon>
            <Looks3Icon />
          </ListItemIcon>
          <ListItemText
            primary={
              exercise.bodyweight
                ? `x${exercise.goalRepsBodyweight}`
                : `x${exercise.goalRepsWeight}`
            }
          />
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={exercise.set3Complete}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": labelId }}
              onChange={() => updateSet(exercise.id, "set3")}
            />
          </ListItemIcon>
        </ListItem>
      </List>
    </>
  );
}
