import List from "@mui/material/List";
import PPLWorkoutItem from "./PPLWorkoutItem";

export default function PPLWorkout({exercises, updateSet}) {
  return (
    <>
      {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}> */}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#333333" }}>
        {exercises.map((exercise) => (
          <PPLWorkoutItem
            exercise={exercise}
            key={exercise.id}
            updateSet={updateSet}
          />
        ))}
      </List>
    </>
  );
}
