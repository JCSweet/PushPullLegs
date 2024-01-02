import List from "@mui/material/List";
import PPLWorkoutItem from "./PPLWorkoutItem";

export default function PPLWorkout({exercises, updateSet, toggleWeightMode, increaseReps, decreaseReps, }) {
  return (
    <>
      {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}> */}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#333333" }}>
        {exercises.length === 0 ? <div className="noWorkoutMessage"><h2>Click "Quick PPL" <br />to begin!</h2></div> : null}
        {exercises.map((exercise) => (
          <PPLWorkoutItem
            exercise={exercise}
            key={exercise.id}
            updateSet={updateSet}
            toggleWeightMode = {toggleWeightMode}
            increaseReps={increaseReps}
            decreaseReps={decreaseReps}
          />
        ))}
      </List>
    </>
  );
}
